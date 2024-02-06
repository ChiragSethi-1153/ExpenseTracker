import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BarChartIcon from '@mui/icons-material/BarChart';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div>
    
     <div style={{marginTop: '5vh', display: 'flex', justifyContent: 'space-around'}}>
    <Button  variant="outlined" startIcon={<HomeIcon />} onClick={() => navigate('/')}>Home</Button>
      <Button  variant="outlined" startIcon={<AccountBalanceWalletIcon />} onClick={() => navigate('/')}>Cashflow</Button>
      <Button  variant="outlined" startIcon={<BarChartIcon />} onClick={() => navigate('/')}>Net Worth</Button>

    </div>
    
    </div>
  )
}

export default Navbar
