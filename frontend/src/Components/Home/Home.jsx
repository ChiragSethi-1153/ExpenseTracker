import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Button } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Home.css'
import AddModule from './AddModule'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ExpenseList from './ExpenseList';
import { expenses } from '../../Redux/Slice/expenseList';

const Home = () => {
  const dispatch = useDispatch();
  
  const [showAdd, setShowAdd] = useState(false)

  const state = useSelector((state) => state.expenseList.data)
  console.log(state,'hjvugy')

  useEffect(()=> {
    dispatch(expenses())
  }, [])
 console.log(state)
  const handleCategory = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  const showAddModal = () => {
    setShowAdd(true)
    
  }
  const handleAdd = () => {
    setShowAdd(false)
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
        <div className="dropdown">
         <Button variant='outlined' endIcon={< ArrowDropDownIcon/>}  onClick={handleCategory}>Category</Button>
         <div id="myDropdown" className="dropdown-content">
          <a>csdsdc</a>
         </div>
        </div>
      
        <Button 
        variant='contained' 
        style={{backgroundColor: 'black', borderRadius: '20px'}}
        onClick={() => showAddModal()}
        className="edit-btn" > + Add</Button>
      </div>
    </div>
    <div>
      <ExpenseList />
      </div>
          {showAdd && <AddModule hide={handleAdd} />}
    </div>
  )
}

export default Home
