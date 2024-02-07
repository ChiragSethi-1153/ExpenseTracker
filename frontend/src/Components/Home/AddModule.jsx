import { style } from '@mui/system'
import React from 'react'

const AddModule = ({hide}) => {
  return (
    <div>
      <div 
      className="modal-wrapper" 
      onClick={() => hide()} 
      style={{position:' fixed',
    left:'0',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundColor: 'rgba(230, 226, 226, 0.804)'}}
      ></div>
    <div 
    style={{position: 'fixed',
    bottom: '27vh',
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '35vw',
    height: '48vh'}}
    >
    </div>
    </div>
  )
}

export default AddModule
