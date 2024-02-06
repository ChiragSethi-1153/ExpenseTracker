import React from 'react'
import Navbar from './Navbar'
import { Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Home = () => {

  const handleCategory = (e) => {
      e.preventDefault();

  }

  return (
    <div style={{marginLeft: '20vw', marginRight: '10vw'}}>
      <Navbar />

    <div style={{textAlign: 'left'}}>
      <h1>Summary</h1>
    </div>
    <div style={{textAlign: 'left'}}>
      <h4>NetTotal</h4>
    </div>
    <div style={{display: 'flex'}}>
      <h4 style={{margin: '2vw'}} >Income </h4>
      <h4 style={{margin: '2vw'}}>Expenses</h4>
    </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <h3>Transaction</h3>

      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: "center", gap: '5vw'}}>
        <Button variant='outlined' endIcon={< ArrowDropDownIcon/>}  >Type</Button>
        <Button variant='outlined' endIcon={< ArrowDropDownIcon/>}  onClick={() => {handleCategory()}}>Category</Button>
        <Button variant='contained' style={{backgroundColor: 'black', borderRadius: '20px'}} > + Add</Button>
      </div>
    </div>
    <div>
      <table>
        <thead>
          {
            
          }
        </thead>
      </table>
    </div>
    </div>
  )
}

export default Home
