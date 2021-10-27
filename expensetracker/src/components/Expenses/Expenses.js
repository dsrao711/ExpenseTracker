import {React , useState} from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'
    


export default function Expenses(props) {


    const [filteryear , setFilterYear] = useState('2021')
    const [expenses , setExpenses ] = useState(DUMMY_EXPENSES)

    const filterByYear = (selectedYear) => {
        console.log(selectedYear)
        setFilterYear(selectedYear)
    }

    

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter defaultYear = {filteryear} onFilterYear = {filterByYear} />
                {props.expenses.map((expense) => {
                    <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date} />
                })}
            </div>
        </div>

    )
}
