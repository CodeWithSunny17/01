import React from 'react';
import './style.css';
import { useState } from 'react';

export default function ExpenseTracker() {

    const [input, setInput] = useState({
        expense: '',
        amount: '',
    })
    const [display, setDisplay] = useState([]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setInput((input)=>({
            ...input,[name]: value
        }))
    }


    const handleClick = () =>{
        const newExpense = {
            id: display.length+1,
            expense: input.expense,
            amount: input.amount,
        }
        setDisplay(()=>([...display, newExpense]))
        setInput({})
    }

    const handleDelete = (key)=> {
        if(!input) return;

        setDisplay(display.filter((display) => display.id !== key));
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
        <br />
        <br />
        <ul>
            {
                display.map((display)=>{
                    return <li key={display.id}>
                            <div>{display.expense}  </div>
                            <div>{display.amount}  </div>
                            <button onClick={()=>handleDelete(display.id)}>Delete</button>
                        </li>
                })
            }
        </ul>
    </div>
  )
}
