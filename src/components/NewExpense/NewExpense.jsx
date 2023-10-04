import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {        //these names can be anything of our choice and we can name them anything
        // we are trying to take our data which we are saving as object in expense form backwards from exp
        //expenseform who is child of NewExpense.jsx 
        const expenseData = {
            ...enteredExpenseData,  // coping our old data (object) which is named as FormData in ExpenseForm 
            id: 10000 * Math.random().toString()
        }
        // console.log(expenseData);
        props.onExpenseAdd(expenseData);

    }
    const [AddExpense, setAddExpense] = useState(false);
    const onAddExpenseClick = () => {
        setAddExpense(true);
        console.log('In button')

    }
    // note that we are not executing saveExpenseDataHandler here but we are just pointing it here
    // we will execute this function in ExpenseForm
    const stopEditingHandler = () => {
        setAddExpense(false);
    }
    return (
        <div className="new-expense">
            {!AddExpense && <button onClick={onAddExpenseClick}>Add New Expense</button>}
            {AddExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}





        </div>

    );

};

export default NewExpense;