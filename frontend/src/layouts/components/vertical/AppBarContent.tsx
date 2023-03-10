// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

import { ethers } from "ethers";

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { useAuth } from 'src/configs/authProvider'
import { useEffect, useState } from 'react'
import { Alert, Button } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const shortenAddress = (address: string) => {
  if (address)
    return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const { currentAccount, setCurrentAccount } = useAuth()

  // Note: Account Balance is not required for now, add later if required
  // const [accountBalance, setAccountBalance] = useState(0)
  // useEffect(() => {
  //   const fetchAccountBalance = async (account: any) => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     if (currentAccount) {
  //       const ethbalance = await provider.getBalance(currentAccount);
  //       setAccountBalance(Number(ethbalance));
  //     }
  //   }

  //   if (currentAccount) {
  //     fetchAccountBalance(currentAccount)
  //   }
  // }, [currentAccount])

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <Alert sx={{ display: 'flex', justifyContent: 'center', ml: 5 }} severity="info">
          Please make sure Mantle Testnet is selected in Metamask. Project won't work otherwise!
        </Alert>
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {currentAccount ? (
          <div className="flex items-center">
            {/* <p className="mr-6 border px-4 py-2">{accountBalance} BIT</p> */}
            {/* onClick={disconnectAccount} */}
            <h4 className="cursor-pointer">{shortenAddress(currentAccount)}</h4>
          </div>
        ) : (
          <Button variant='contained' sx={{ padding: theme => theme.spacing(1.75, 5.5) }} onClick={setCurrentAccount}>Connect Wallet</Button>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent
