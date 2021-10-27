import { React, useState } from 'react'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import './Expenses.css'



export default function Expenses(props) {

    const [filteryear, setFilterYear] = useState('2021')


    const filterByYear = (selectedYear) => {
        console.log(selectedYear)
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteryear;
    });

    let expensesContent = <p>No expenses found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter defaultYear={filteryear} onFilterYear={filterByYear} selected={filteryear} />
                {expensesContent}
            </div>
        </div>

    )
}

