import { useState } from 'react';
import React from "react";
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [EnteredTitle, SetEnteredTitle] = useState(' ');
    const [EnteredAmount, SetEnteredAmount] = useState('');
    const [EnteredDate, SetEnteredDate] = useState('');
    // const [UserInput, setUserInput] = useState({
    //     EnteredTitle: '',
    //     EnteredAmount: '',
    //     EnteredDate: ''
    // });
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        SetEnteredTitle(event.target.value);
        // setUserInput({
        //     ...UserInput , 
        //     EnteredTitle: event.target.value
        // })
        // setUserInput((prevState => {
        //     return {...prevState , EnteredTitle: event.target.value}
        // }))
    }
    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
        console.log(event.target.value);
        // setUserInput({
        //     ...UserInput,
        //     EnteredAmount: event.target.value
        // })
        // setUserInput((prevState => {
        //     return {...prevState , EnteredAmount: event.target.value}
        // }))
    }
    const DateChangeHandler = (event) => {
        SetEnteredDate(event.target.value)
        console.log(event.target.value);
        // setUserInput({
        //     ...UserInput,  
        //     EnteredDate: event.target.value
        // })
        // setUserInput((prevState => {
        //     return {...prevState , EnteredDate: event.target.value}

        // }))

    }

    const submitHandler = (event) => {
        event.preventDefault();
        const FormData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        }
        //console.log(FormData);
        props.onSaveExpenseData(FormData);
        SetEnteredTitle(' ');
        SetEnteredAmount(" ");
        SetEnteredDate(' ');

    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={EnteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min={'0.01'} step={'0.01'} value={EnteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min={"2023-01-01"} max={"2025-01-01"} value={EnteredDate} onChange={DateChangeHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;