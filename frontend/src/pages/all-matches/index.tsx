// ** React Imports
import { SyntheticEvent, useEffect, useState } from 'react';
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
import { Alert, Avatar, AvatarGroup, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Modal, Typography } from '@mui/material';

import DatastoreAbi from '../../abis/Datastore.json';
import { DATASTORE_CONTRACT } from 'src/utils/constants';
import { GetCurrentUTCDateString, GetDateStringFromDate, GetEpochDateTimestampForToday, GetEpochTimestampToday, GetRandomInt } from 'src/utils/utils';
import { useAuth } from 'src/configs/authProvider';

interface IMatchData {
  name: string;
  teamA: string;
  teamB: string;
  startDateTime: BigInteger;
  endDateTime: BigInteger;
  metadata: string;
  isRunning: boolean;
  isOpen: boolean;
  isFinished: boolean;
};

const AllMatches = (props: any) => {
  // ** State
  const { currentAccount, setCurrentAccount } = useAuth();
  const [todaysMatches, setTodaysMatches] = useState<IMatchData[]>([]);

  async function getAllMatches(dateStr: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const dsContract = new ethers.Contract(DATASTORE_CONTRACT, DatastoreAbi.abi, signer);
    const resp = await dsContract.GetMatches(dateStr);
    console.log("====== contract resp: ", resp, dateStr);
    return resp;
  }

  useEffect(() => {
    const todayTs = GetEpochDateTimestampForToday();
    (async () => {
      const allMAtches = await getAllMatches(todayTs);
      setTodaysMatches(allMAtches);
      // console.log("======= today's matches are: ", GetDateStringFromDate(today));
    })();
  }, []);

  return (
    <>
      <Typography variant='h4' sx={{ mb: 2 }}>Today's Matches</Typography>
      <Grid container>
        {
          todaysMatches?.length > 0 ?
            todaysMatches.map((m: IMatchData) => {
              return <Grid key={m.name} item xs={12} sm={6} md={4}>
                <Card sx={{ position: 'relative', mr: 2 }}>
                  <CardMedia sx={{ height: '0.5rem;' }} image='/images/cards/background-user.png' />
                  <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                      <CardContent>
                        <Avatar
                          alt={m.teamA}
                          src='/images/avatars/1.png'
                          sx={{
                            width: 65,
                            height: 65,
                            border: theme => `0.25rem solid ${theme.palette.common.white}`
                          }}
                        />
                        <Box sx={{ mr: 2, pt: 3, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant='h6'>INDIA</Typography>
                        </Box>
                      </CardContent>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                      <CardContent>
                        <Avatar
                          alt={m.teamB}
                          src='/images/avatars/1.png'
                          sx={{
                            width: 65,
                            height: 65,
                            border: theme => `0.25rem solid ${theme.palette.common.white}`
                          }}
                        />
                        <Box sx={{ mr: 2, pt: 3, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant='h6'>AUSTRALIA</Typography>
                        </Box>
                      </CardContent>
                    </Box>
                  </Box>

                  <CardContent>
                    <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant='h6' sx={{ whiteSpace: 'wrap', color: 'text.primary' }}>
                        {m.name}
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardContent>
                    <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                      {/* <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        Show Leagues
                      </Typography> */}
                      <Button variant='contained'>
                        <Link href={`/match-leagues/${m.name}`}>Leagues</Link>
                      </Button>
                      <AvatarGroup max={GetRandomInt()}>
                        <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
                        <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                        <Avatar src='/images/avatars/3.png' alt='Howard Lloyd' />
                        <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
                        <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                        <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
                        <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                      </AvatarGroup>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            })
            : <Alert sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} severity="info">No matches scheduled for today!</Alert>
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

export default AllMatches
