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
import { Alert, Avatar, AvatarGroup, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, FormHelperText, IconButton, InputLabel, Menu, MenuItem, Modal, SelectChangeEvent, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import LeagueAbi from '../../../abis/LeagueX3.json';
import LeagueRewardsAbi from '../../../abis/LeagueRewards.json';
import { CONSOLATION_NFT_IMAGE, DEMO_SQUAD01, DEMO_SQUAD02, LEAGUE_CONTRACT, REWARDS_CONTRACT, RUNNERSUP_NFT_IMAGE, SECOND_RUNNERSUP_NFT_IMAGE, WINNER_NFT_IMAGE } from 'src/utils/constants';
import { useRouter } from 'next/router';
import { GridProps } from '@mui/system';
import { BookLock, CartPlus, Facebook, GooglePlus, Linkedin, ShareVariant, Twitter } from 'mdi-material-ui';
import { useAuth } from 'src/configs/authProvider';
import { LoadingButton } from '@mui/lab';
import { SlowBuffer } from 'buffer';
import { GetLeagueMatchFromLeagueName, GetRandomPointsForUser, shortenAddress } from 'src/utils/utils';

interface ILeagueData {
  name: string;
  img: string;
  metadata: string;
  matchName: string;
  teamA: string;
  teamB: string;
  isRunning: string;
  isFinished: boolean;
  leaguePrice: number;
  squadLimit: number;
};

interface Column {
  id: 'userAddress' | 'totalPoints' | 'position' | 'action'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
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
    id: 'action',
    label: 'Actions',
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
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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

  const [matchLeaguesLoaded, setMatchLeaguesLoaded] = useState(false);
  const [matchLeagues, setMatchLeagues] = useState<ILeagueData[]>([]);
  const [leagueLeaderboard, setLeagueLeaderboard] = useState<ILeaderboardData[]>([]);
  const [sortedLeaderboard, setSortedLeaderboard] = useState<ISortedLeaderboardData[]>([]);
  const { currentAccount, setCurrentAccount } = useAuth();
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [isSimulationDone, setIsSimulationDone] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState<ILeagueData>();
  const [showSortedLeaderboard, setShowSortedLeaderboard] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleModalChange = (event: SelectChangeEvent) => {
    console.log("nothing for now");
  };

  const router = useRouter();
  const matchName = router.query.matchName as string

  async function getAllMatchLeagues() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.GetLeagues(matchName);
    console.log("====== getMatchLeagues contract resp: ", resp);
    return resp;
  }

  async function MintNFTReward(leagueName: string, matchName: string, user_address: string, title: string, nftIpfsLink: string, nftImg: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const rewardsContract = new ethers.Contract(REWARDS_CONTRACT, LeagueRewardsAbi.abi, signer);
    const resp = await rewardsContract.CreateNft(leagueName, matchName, title, nftIpfsLink, nftImg, user_address);
    console.log("====== MintNFTReward contract resp: ", resp);
    return resp;
  }

  async function getLeagueLeaderboard(leagueName: string, matchName: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.GetLeagueLeaderboard(leagueName, matchName);
    console.log("====== getLeagueLeaderboard contract resp: ", resp);
    return resp;
  }

  function createSortedData(obj: ILeaderboardData): ISortedLeaderboardData {
    return {
      userAddress: obj.userAddress,
      totalPoints: obj.totalPoints,
      position: obj.position,
      isWinner: obj.isWinner,
      isRunnersUp: obj.isRunnersUp,
      isSecondRunnersUp: obj.isSecondRunnersUp,
      isConsolationWinner: obj.isConsolationWinner,
      title: obj.title,
    };
  }

  async function ShowLeaderboardModal(league: ILeagueData) {
    setShowSortedLeaderboard(false);
    setModalOpen(true);
    setSelectedLeague(league);
  }

  async function calculateLeagueLeaderboard(leagueName: string, matchName: string, objs: ILeaderboardData[]) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.CalculateLeaderboard(leagueName, matchName, objs);
    console.log("====== calculateLeagueLeaderboard contract resp: ", resp);
    return resp;
  }

  async function finalizeLeagueLeaderboard(leagueName: string, matchName: string, objs: ILeaderboardData[]) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);
    const resp = await lContract.SetFinalLeaderboard(leagueName, matchName, objs);
    console.log("====== finalizeLeagueLeaderboard contract resp: ", resp);
    return resp;
  }

  async function SimulateLeagueLeaderboard() {
    setIsSimulating(true);
    console.log("======== selected league: ", selectedLeague, leagueLeaderboard);
    if (selectedLeague) {
      // const leagueMatch = GetLeagueMatchFromLeagueName(selectedLeague.name);
      const resp = await getLeagueLeaderboard(selectedLeague.name, selectedLeague.matchName);
      console.log("======= GetLeagueLeaderBoard are: ", resp);
      var all_reqs: ILeaderboardData[] = [];
      if (resp) {
        var ll: ILeaderboardData;
        for (ll of resp) {
          const p = GetRandomPointsForUser();
          const sim_obj: ILeaderboardData = {
            userAddress: ll.userAddress,
            totalPoints: p,
            position: ll.position,
            isWinner: ll.isWinner,
            isRunnersUp: ll.isRunnersUp,
            isSecondRunnersUp: ll.isSecondRunnersUp,
            isConsolationWinner: ll.isConsolationWinner,
            title: "",
          }
          all_reqs.push(sim_obj);
          console.log("===== simulated request: ", sim_obj);
        }

        const r1 = await calculateLeagueLeaderboard(selectedLeague.name, selectedLeague.matchName, all_reqs);
        console.log("======== simlated response is: ", r1);
        if (r1) {
          // do the sorting and stuff here!
          var toBeSorted: ILeaderboardData[] = [];
          for (var i = 0; i < all_reqs.length; i++) {
            toBeSorted.push(all_reqs[i]);
          }
          toBeSorted.sort(function (a: ILeaderboardData, b: ILeaderboardData) {
            return b.totalPoints - a.totalPoints;
          });
          // array is sorted now
          var localSorted: ISortedLeaderboardData[] = []
          console.log("===== final sorted data is: ", localSorted);

          for (var i = 0; i < toBeSorted.length; i++) {
            toBeSorted[0].isWinner = true;
            toBeSorted[0].title = "Winner";
            if (i == 1) {
              toBeSorted[1].isRunnersUp = true;
              toBeSorted[1].title = "Runners-Up";
            } else if (i == 2) {
              toBeSorted[2].isSecondRunnersUp = true;
              toBeSorted[2].title = "Second Runners-Up";
            } else if (i == 3) {
              toBeSorted[3].isConsolationWinner = true;
              toBeSorted[3].title = "Consolation Price Winner";
            }
            toBeSorted[i].position = i + 1;
            localSorted.push(toBeSorted[i]);
          }

          setSortedLeaderboard(localSorted);
          setShowSortedLeaderboard(true);
          setLeagueLeaderboard(toBeSorted);
          console.log("===== final sorted data is: ", localSorted);
        }

      }
    }
    setIsSimulating(false);
    setIsSimulationDone(true);
  }

  async function FinalizeLeaderboard() {
    if (selectedLeague && sortedLeaderboard) {
      // const leagueMatch = GetLeagueMatchFromLeagueName(selectedLeague.name);
      const finalizeResp = finalizeLeagueLeaderboard(selectedLeague.name, selectedLeague.matchName, sortedLeaderboard);
      console.log("===== finalizaing: ", selectedLeague, sortedLeaderboard, finalizeResp);
    } else {
      alert("Please reload the page...");
    }
  }

  async function MintNfts(user_addr: string, title: string) {
    if (selectedLeague) {
      console.log("======= mointing NFT...", selectedLeague, user_addr, title);
      var nftIpfs = "";
      var nftImg = "";
      if (title.startsWith("Winner")) {
        nftIpfs = WINNER_NFT_IMAGE;
        nftImg = WINNER_NFT_IMAGE;
      } else if (title.startsWith("Runners")) {
        nftIpfs = RUNNERSUP_NFT_IMAGE;
        nftImg = RUNNERSUP_NFT_IMAGE;
      } else if (title.startsWith("Second")) {
        nftIpfs = SECOND_RUNNERSUP_NFT_IMAGE;
        nftImg = SECOND_RUNNERSUP_NFT_IMAGE;
      } else if (title.startsWith("Consolation")) {
        nftIpfs = CONSOLATION_NFT_IMAGE;
        nftImg = CONSOLATION_NFT_IMAGE;
      }
      const rr = await MintNFTReward(selectedLeague.name, selectedLeague.matchName, user_addr, title, nftIpfs, nftImg);
      console.log("mint nft response: ", rr);
    }
  }

  useEffect(() => {
    (async () => {
      const uLeagues = await getAllMatchLeagues();
      // setUserLeagues(uLeagues);
      setMatchLeagues(uLeagues);
      setMatchLeaguesLoaded(true);
      console.log("======= matchLeagues are: ", matchLeagues);
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
              <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => SimulateLeagueLeaderboard()} disabled={isSimulating}>
                <LoadingButton loading={isSimulating}></LoadingButton>
                Simulate Player Points
              </Button>
              {isSimulationDone ?
                <div>
                  <Alert sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }} severity="info">
                    Simulation is done. <br />
                    In production environment, this simulation transaction is a compuatationally heavy and should be performed on a L2 chain (like Mantle). For Demo purposes, this transaction is being executed by the admin.
                    <br /><br />
                    The following Finalize Leaderboard transaction sets up the final leaderboard data on the main L1 chain. This transaction again would be executed by the Mantle SDK with data received from the above transaction. For Demo purposes, this is being executed by the admin.
                    <br /><br />
                    Please refer to the <a href='https://drive.google.com/file/d/1zDG664cy-aAiEZ4Q_26ameDeKRoCaJx6/view?usp=share_link' target='_blank'>Architecture Diagram</a> and <a href='https://github.com/sagaranand015/mantle-fantasy-sports/blob/main/README.md' target='_blank'>Project README</a> for more details.
                  </Alert>
                  <Button variant='contained' sx={{ py: 2.5, width: '100%', mt: 2, borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => FinalizeLeaderboard()} disabled={isCalculating}>
                    <LoadingButton loading={isCalculating}></LoadingButton>
                    Finalize Leaderboard
                  </Button>
                </div> : ""}

              {showSortedLeaderboard ?
                <div>
                  <Grid item xs={12}>
                    <TableContainer sx={{ maxHeight: 440 }}>
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
                                  if (column.id == "action") {
                                    const res = row["title"];
                                    if (res == "") {
                                      return
                                    }
                                    const uaddr = row["userAddress"];
                                    return (
                                      <TableCell key={column.id} align={column.align}>
                                        <Button variant='contained' sx={{ py: 2.5, width: '100%', mt: 2, borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => MintNfts(uaddr, res)} disabled={isCalculating}>
                                          Mint {res} NFT
                                        </Button>
                                      </TableCell>
                                    )
                                  } else if (column.id == "userAddress") {
                                    return (<TableCell key={column.id} align={column.align}>
                                      {shortenAddress(row[column.id])}
                                    </TableCell>)
                                  }
                                  else {
                                    const value = row[column.id];
                                    return (
                                      <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                      </TableCell>
                                    )
                                  }
                                })}
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', mt: 2, borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => FinalizeLeaderboard()} disabled={isCalculating}>
                      <LoadingButton loading={isCalculating}></LoadingButton>
                      Distribute Rewards
                    </Button> */}
                    {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => FinalizeLeaderboard()} disabled={isCalculating}>
                      <LoadingButton loading={isCalculating}></LoadingButton>
                      Finalize Leaderboard
                    </Button> */}
                  </Grid>
                </div>
                :
                <Grid item xs={12}>
                  <Alert sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} severity="info">
                    Please perform a simulation and then finalize the leaderboard!
                  </Alert>
                </Grid>

              }

            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid container>
        {
          matchLeagues.length > 0 ? (
            matchLeagues.map((ul: ILeagueData) => {
              return <Grid key={ul.name} item xs={12} sm={6} md={6} sx={{ pr: 2, pb: 2 }}>
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
                          {ul.name}, {ul.matchName}
                        </Typography>
                      </CardContent>
                      <CardActions className='card-action-dense'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                          <Button onClick={() => ShowLeaderboardModal(ul)}>
                            <CartPlus fontSize='small' sx={{ marginRight: 2 }} />
                            Calculate Leaderboard
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
            matchLeaguesLoaded ? (<div>No leagues available for the selected match!</div>) : (<LoadingButton loading={!matchLeaguesLoaded}></LoadingButton>)

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
