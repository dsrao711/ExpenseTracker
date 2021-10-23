import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div><b>📅 {props.date.toLocaleDateString()}</b></div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">💸 {props.amount}</div>
            </div>
        </div>
    )
}
