import React from 'react';
import './style.css';
import { useState } from 'react';

export default function ExpenseTracker() {

    const [input, setInput] = useState({
        expense: '',
        amount: '',
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInput((input)=>({
            ...input,[name]: value
        }))
    }

    const handleClick = () =>{
        
    }

  return (
    <div className='expense'>
        <h1>Expense Tracker</h1>
        <input placeholder="Expense" name= "expense" type="text" onChange={handleChange} value={input.expense}/>
        <br />
        <input placeholder="Amount" name= "amount" type="number" onChange={handleChange} value={input.amount}/>
        <br />
        <br />
        <button onClick={handleClick}>Add Expense</button>
    </div>
  )
}
