// ** React Imports
import { SyntheticEvent, useEffect, useState, MouseEvent } from 'react';
import { ethers } from "ethers";

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
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
import { Avatar, AvatarGroup, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, FormHelperText, IconButton, InputLabel, Menu, MenuItem, Modal, SelectChangeEvent, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import LeagueAbi from '../../abis/LeagueX3.json';
import { DEMO_SQUAD01, DEMO_SQUAD02, LEAGUE_CONTRACT } from 'src/utils/constants';
import { useRouter } from 'next/router';
import { GridProps } from '@mui/system';
import { CartPlus, Facebook, GooglePlus, Linkedin, ShareVariant, Twitter } from 'mdi-material-ui';
import { useAuth } from 'src/configs/authProvider';
import { LoadingButton } from '@mui/lab';

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

interface ISquadData {
  squad: any;
  squadLink: string;
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
  const { currentAccount, setCurrentAccount } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleModalChange = (event: SelectChangeEvent) => {
    console.log("nothing for now");
  };

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const lContract = new ethers.Contract(LEAGUE_CONTRACT, LeagueAbi.abi, signer);

  const router = useRouter();

  async function getUserLeagues() {
    const resp = await lContract.get_all_user_participation(currentAccount);
    console.log("====== getUserLeagues contract resp: ", resp);
    return resp[1];
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
                Participate in nothing
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {/* <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={() => ConfirmParticipation()} disabled={isLoading}>
                <LoadingButton loading={isLoading}></LoadingButton>
                Confirm Participation with {selectedLeague?.leaguePrice} BIT
              </Button> */}
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
                        <img width={137} height={176} alt='Apple iPhone 11 Pro' src='/images/cards/iPhone-11-pro.png' />
                      </CardContent>
                    </StyledGrid>
                    <Grid
                      item
                      xs={12}
                      md={7}
                      sx={{
                        paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
                        paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
                      }}
                    >
                      <CardContent>
                        <Typography variant='h6' sx={{ marginBottom: 2 }}>
                          {ul.leagueName}
                        </Typography>
                        {/* <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                          Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
                        </Typography> */}
                        {/* <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                          Price:{' '}
                          <Box component='span' sx={{ fontWeight: 'bold' }}>
                            {ml.leaguePrice} BIT
                          </Box>
                        </Typography>
                        <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                          Squad Limit:{' '}
                          <Box component='span' sx={{ fontWeight: 'bold' }}>
                            {ml.squadLimit}
                          </Box>
                        </Typography> */}
                      </CardContent>
                      <CardActions className='card-action-dense'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          {/* onClick={() => ShowLeaderBoard(ml)} */}
                          <Button>
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
            (<div>No User Leagues yet!</div>)
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
