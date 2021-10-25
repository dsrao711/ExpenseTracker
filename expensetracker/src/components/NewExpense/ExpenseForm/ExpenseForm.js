import {React , useState }from 'react' ;
import './ExpenseForm.css' ;

const ExpenseForm = () => {

    

    return (
        <div className = "new-expense__control">

            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min = "10" step = "10"  />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min = "2020-01-01" max = "2021-12-31" />
            </div>

        </div>
    )
}

export default ExpenseForm
