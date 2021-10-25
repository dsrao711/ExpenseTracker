import {React , useState }from 'react' ;
import './ExpenseForm.css' ;

const ExpenseForm = () => {

    // Naive approach

    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value)
    // }

    // const AmountChangeHandler = (event) => {
    //     setEnteredAmount(event.target.value)
    // }

    // const DateChangeHandler = (event) => {
    //     setEnteredDate(event.target.value)
    // }


    const [userInput, setUserInput] = useState({
        enteredTitle : '' ,
        enteredAmount : '' ,
        enteredDate : ''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput , 
            enteredTitle : event.target.value
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput , 
            enteredAmount : event.target.value
        })
    }
    
    const dateChangeHandler = (event) =>{
        setUserInput({
            ...userInput , 
            enteredDate : event.target.value
        })
    }

    return (
        <div className = "new-expense__control">

            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange = {titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min = "10" step = "10" onChange = {AmountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min = "2020-01-01" max = "2021-12-31" onChange = {DateChangeHandler} />
            </div>

        </div>
    )
}

export default ExpenseForm
