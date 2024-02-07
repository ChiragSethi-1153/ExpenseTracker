import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { expenses } from '../../Redux/Slice/expenseList'

const ExpenseList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
  console.log(state)
  
  useEffect(() => {
    dispatch(expenses())
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ExpenseList
