import {React , useState} from 'react' 
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm'
import './ExpenseForm/ExpenseForm.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    
    const saveExpenseDataHandler = (expensesEntered) => {
        const expensesData = {
            ...expensesEntered ,
            id : Math.random().toString() 
        }; 
        // Forward data to App.js
        props.onAddExpense(expensesData)
        //Close form
        setIsEditing(false)
    }

    const editingHandler = () => {
        setIsEditing(true);
    }

    const closeHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className = "new-expense">
            {!isEditing && <button onClick = {editingHandler} className = "new-expense__actions" >Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {closeHandler} />   }
        </div>
    )
}

export default NewExpense
