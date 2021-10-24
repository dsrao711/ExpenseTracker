import React from 'react'
import ExpenseDate from './ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card'

export default function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date = {props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">💸 {props.amount}</div>
            </div>
        </div>
    )
}
