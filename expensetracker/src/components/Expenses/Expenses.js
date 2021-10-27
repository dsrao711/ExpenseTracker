import {React , useState} from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'
    


export default function Expenses(props) {

    const [filteryear , setFilterYear] = useState('2021')
    

    const filterByYear = (selectedYear) => {
        console.log(selectedYear)
        setFilterYear(selectedYear)
    }

    
    

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter defaultYear = {filteryear} onFilterYear = {filterByYear} selected = {filteryear}/>
                {props.items.filter((expense) => (expense.date.getFullYear().toString() === filteryear)).map(filtered_expense => (
                        <ExpenseItem key = {filtered_expense.id} title = {filtered_expense.title} amount = {filtered_expense.amount} date = {filtered_expense.date} />
                ))}        
            </div>
        </div>

    )
}

 