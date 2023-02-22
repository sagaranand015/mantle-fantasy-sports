// ** React Imports
import { SyntheticEvent, useEffect, useState, MouseEvent } from 'react';
import { ethers } from "ethers";

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { responsiveFontSizes, styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

import Link from 'next/link';

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { FetchDataFromIpfsLink, GetLeagueDataIpfsLink, GetSquadDataIpfsLink } from 'src/@core/utils/nftStorage'
import { ALL_LEAGUES } from 'src/@core/utils/constants'
import { Avatar, AvatarGroup, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, FormHelperText, IconButton, InputLabel, Menu, MenuItem, Modal, SelectChangeEvent, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import LeagueAbi from '../../abis/LeagueX3.json';
import { DEMO_SQUAD01, DEMO_SQUAD02, LEAGUE_CONTRACT } from 'src/utils/constants';
import { useRouter } from 'next/router';
import { GridProps } from '@mui/system';
import { CartPlus, Facebook, GooglePlus, Linkedin, ShareVariant, Twitter } from 'mdi-material-ui';
import { useAuth } from 'src/configs/authProvider';
import { LoadingButton } from '@mui/lab';
import { SlowBuffer } from 'buffer';
import { GetLeagueMatchFromLeagueName, GetSquadCount, shortenAddress } from 'src/utils/utils';
import { auto } from '@popperjs/core';

interface Column {
  id: 'userAddress' | 'totalPoints' | 'position' | 'squads' | 'title'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'userAddress', label: 'Address', minWidth: 170 },
  { id: 'totalPoints', label: 'totalPoints', minWidth: 100 },
  {
    id: 'position',
    label: 'position',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'squads',
    label: 'Squad Count',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

interface IUserLeagueData {
  leagueName: string;
  squads: string;
};

interface ILeaderboardData {
  userAddress: string;
  totalPoints: number;
  position: number;
  isWinner: boolean;
  isRunnersUp: boolean;
  isSecondRunnersUp: boolean;
  isConsolationWinner: boolean;
  title: string;
}

interface ISortedLeaderboardData {
  userAddress: string;
  totalPoints: number;
  position: number;
  isWinner: boolean;
  isRunnersUp: boolean;
  isSecondRunnersUp: boolean;
  isConsolationWinner: boolean;
  squads: number;
  title: string;
}

const UserLeagues = (props: any) => {
  // ** State for local share components
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [userLeagues, setUserLeagues] = useState<IUserLeagueData[]>([]);
  const [leagueLeaderboard, setLeagueLeaderboard] = useState<ILeaderboardData[]>([]);
  const [sortedLeaderboard, setSortedLeaderboard] = useState<ISortedLeaderboardData[]>([]);
  const { currentAccount, setCurrentAccount } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleModalChange = (event: SelectChangeEvent) => {
    console.log("nothing for now");
  };

  const router = useRouter();

  async function getUserLeagues() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.GetAllUserParticipation(currentAccount);
    console.log("====== getUserLeagues contract resp: ", resp);
    return resp[1];
  }

  async function getLeagueLeaderboard(leagueName: string, matchName: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.GetLeagueLeaderboard(leagueName, matchName);
    console.log("====== getLeagueLeaderboard contract resp: ", resp);
    return resp;
  }

  function createSortedData(obj: ILeaderboardData, squadList: string): ISortedLeaderboardData {
    const sqs = GetSquadCount(squadList);
    return {
      userAddress: shortenAddress(obj.userAddress),
      totalPoints: obj.totalPoints,
      position: obj.position,
      isWinner: obj.isWinner,
      isRunnersUp: obj.isRunnersUp,
      isSecondRunnersUp: obj.isSecondRunnersUp,
      isConsolationWinner: obj.isConsolationWinner,
      squads: sqs,
      title: obj.title,
    };
  }

  async function ShowLeaderboardModal(league: IUserLeagueData) {
    const leagueMatch = GetLeagueMatchFromLeagueName(league.leagueName);
    const resp = await getLeagueLeaderboard(leagueMatch.league, leagueMatch.match);
    console.log("======= GetLeagueLeaderBoard are::::::::: ", resp);
    if (resp) {
      // var toBeSorted: ILeaderboardData[] = [];
      // for (var i = 0; i < resp.length; i++) {
      //   toBeSorted.push(resp[i]);
      // }
      // toBeSorted.sort(function (a: ILeaderboardData, b: ILeaderboardData) {
      //   return b.totalPoints - a.totalPoints;
      // });

      // array is sorted now
      var localSorted: ISortedLeaderboardData[] = []
      for (var i = 0; i < resp.length; i++) {
        localSorted.push(createSortedData(resp[i], league.squads));
      }
      setSortedLeaderboard(localSorted);
      setModalOpen(true);
      // setLeagueLeaderboard(toBeSorted);
      console.log("======= leagueLeaderboard are: ", sortedLeaderboard);
    }
  }

  useEffect(() => {
    (async () => {
      const uLeagues = await getUserLeagues();
      setUserLeagues(uLeagues);
      console.log("======= userLeagues are: ", userLeagues);
    })();
  }, []);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                League Leaderboard
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TableContainer sx={{ maxHeight: auto }}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map(column => (
                        <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sortedLeaderboard.map(row => {
                      return (
                        <TableRow hover role='checkbox' tabIndex={-1} key={row.userAddress}>
                          {columns.map(column => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid container>
        {
          userLeagues.length > 0 ? (
            userLeagues.map((ul: IUserLeagueData) => {
              return <Grid key={ul.leagueName} item xs={12} sm={6} md={6} sx={{ pr: 2, pb: 2 }}>
                <Card>
                  <Grid container spacing={6}>
                    <StyledGrid item md={5} xs={12}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img width={137} height={176} alt='Apple iPhone 11 Pro' src='/images/cricket-thumbnail.jpeg' />
                      </CardContent>
                    </StyledGrid>
                    <Grid
                      item
                      xs={12}
                      md={7}
                      sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
                        paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
                      }}
                    >
                      <CardContent>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>
                          {ul.leagueName}
                        </Typography>
                      </CardContent>
                      <CardActions className='card-action-dense'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                          <Button onClick={() => ShowLeaderboardModal(ul)}>
                            <CartPlus fontSize='small' sx={{ marginRight: 2 }} />
                            See Leaderboard
                          </Button>
                          <IconButton
                            id='long-button'
                            aria-label='share'
                            aria-haspopup='true'
                            onClick={handleClick}
                            aria-controls='long-menu'
                            aria-expanded={open ? 'true' : undefined}
                          >
                            <ShareVariant fontSize='small' />
                          </IconButton>
                          <Menu
                            open={open}
                            id='long-menu'
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'long-button'
                            }}
                          >
                            <MenuItem onClick={handleClose}>
                              <Facebook />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <Twitter />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <Linkedin />
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <GooglePlus />
                            </MenuItem>
                          </Menu>
                        </Box>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            })
          )
            :
            (<div>The connected account has not participated in any leagues!</div>)
        }
      </Grid>
    </div >
  )
}

// export async function getStaticProps(context: any) {
//   var allMatches = await getAllMatches("1676419200");
//   return {
//     props: {
//       'matches': allMatches
//     }
//   };
// }

export default UserLeagues;
