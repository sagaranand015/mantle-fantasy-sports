// ** React Imports
import { MouseEvent, useState, useEffect } from 'react';
import { ethers } from "ethers";

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'
import Grid, { GridProps } from '@mui/material/Grid'

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

import { FetchDataFromIpfsLink, GetLeagueDataIpfsLink, GetSquadDataIpfsLink, MakeIpfsLink } from 'src/@core/utils/nftStorage'
import { ALL_LEAGUES } from 'src/@core/utils/constants'
import { Alert, Avatar, AvatarGroup, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, FormHelperText, IconButton, InputLabel, Menu, MenuItem, Modal, Typography } from '@mui/material';

import DatastoreAbi from '../../abis/Datastore.json';
import RewardsAbi from '../../abis/LeagueRewards.json';
import { DATASTORE_CONTRACT, REWARDS_CONTRACT } from 'src/utils/constants';
import { GetCurrentUTCDateString, GetDateStringFromDate, GetEpochDateTimestampForToday, GetEpochTimestampToday, GetRandomInt } from 'src/utils/utils';
import { useAuth } from 'src/configs/authProvider';
import { Facebook, GooglePlus, Linkedin, ShareVariant, Twitter } from 'mdi-material-ui';

interface IUserRewardData {
  ipfsHash: string;
  image: string;
  owner: string;
  leagueName: string; // leagueName
  matchName: string; // matchName
  title: string; // winner/runnersup and so on
};

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
}))

const UserRewards = (props: any) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // ** State
  const { currentAccount, setCurrentAccount } = useAuth();
  const [userRewards, setUserRewards] = useState<IUserRewardData[]>([]);


  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const rewardsContract = new ethers.Contract(REWARDS_CONTRACT, RewardsAbi.abi, signer);

  async function getUserRewards(user_address: string) {
    const resp = await rewardsContract.GetUserRewards(user_address);
    console.log("====== contract GetUserRewards resp: ", resp);
    return resp;
  }

  useEffect(() => {
    const todayTs = GetEpochDateTimestampForToday();
    (async () => {
      if (currentAccount) {
        const allUserRewards = await getUserRewards(currentAccount);
        setUserRewards(allUserRewards);
      }
      // setTodaysMatches(allMAtches);
      // console.log("======= today's matches are: ", GetDateStringFromDate(today));
    })();
  }, []);

  return (
    <>
      <Typography variant='h4' sx={{ mb: 2 }}>My Rewards</Typography>
      <Grid container spacing={6}>
        {
          userRewards?.length > 0 ?
            userRewards.map((ul: IUserRewardData) => {
              return <Grid item xs={12} sm={6}>
                <Card>
                  <Grid container>
                    <StyledGrid item md={5} xs={12}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img width={137} height={176} alt={ul.leagueName} src={MakeIpfsLink(ul.image)} />
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
                        <Typography variant='body2' sx={{ marginBottom: 3.5 }}>
                          {ul.matchName}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                          Status:{' '}
                          <Box component='span' sx={{ fontWeight: 'bold' }}>
                            {ul.title}
                          </Box>
                        </Typography>
                      </CardContent>
                      <CardActions className='card-action-dense'>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
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
              // </div>
            })
            : <Alert sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} severity="info">No Reward NFTs minted for the connected account yet!</Alert>
        }
      </Grid>
    </>
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

export default UserRewards;
