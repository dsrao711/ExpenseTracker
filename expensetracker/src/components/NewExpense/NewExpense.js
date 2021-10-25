import React from 'react' 
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expensesEntered) => {
        const expensesData = {
            ...expensesEntered ,
            id : Math.random().toString() 
        }; 
        // Forward data to App.js
        props.onAddExpense(expensesData)
    }

    return (
        <div className = "new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>  
        </div>
    )
}

export default NewExpense
