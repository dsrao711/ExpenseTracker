import { React, useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle , 
            amount : enteredAmount , 
            date : new Date(enteredDate)
        }
        // Forward data to NewExpense component
        props.onSaveExpenseData(expenseData)
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value = {enteredTitle} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="10" step="10" onChange={amountChangeHandler} value = {enteredAmount}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2021-12-31" onChange={dateChangeHandler} value = {enteredDate} />
                </div>

                <div className="new-expense__actions">
                    <button type='submit' onSubmit = {submitHandler}>Add Expense</button>
                </div>
                <div className="new-expense__actions">
                    <button type='submit' onClick = {props.onCancel} >Cancel</button>
                </div>
                
            </div>
        </form>
    )
}

export default ExpenseForm

   // Using single state

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // If state update depends on previous state update

    // const titleChangeHandler = (event) => {
    //     setUserInput = (prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value }
    //     }
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput = (prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value }
    //     }
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput = (prevState) => {
    //         return { ...prevState, enteredDate: event.target.value }
    //     }
    // }

    
