// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { useAuth } from 'src/configs/authProvider'
import { useEffect, useState } from 'react'
import HelpNotificationCard from 'src/views/cards/HelpNotificationCard'
import AllMatches from './all-matches'
import PastMatches from './past-matches'
import HomePage from './homepage'

const Dashboard = (props: any) => {
  const { currentAccount, setCurrentAccount } = useAuth()
  const [accountConnected, setAccountConnected] = useState(false)

  useEffect(() => {
    console.log("current account on dashboard page is: ", currentAccount)
    if (currentAccount) {
      setAccountConnected(true)
    } else {
      setAccountConnected(false)
    }
  }, [currentAccount])

  return (
    <div>
      {accountConnected ? (
        <div>
          <AllMatches />
          <PastMatches />
        </div>
      ) :
        (
          <div>

            <HomePage />
          </div>
        )
      }
    </div >
  )
}

export async function getServerSideProps(context: any) {
  // fetch the blog posts from the mock API
  return {
    props: {}
  };
}

export default Dashboard
