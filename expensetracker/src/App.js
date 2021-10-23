import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';


function App() {

  const expenses = [
    {
      title : 'Car Insurance',
      amount : 'Rs. 10,000',
      date : new Date(2021,2, 12)
    },
    {
      title : 'Tuition Fee',
      amount : 'Rs. 5000',
      date : new Date(2021, 12, 1)
    },
    {
      title : 'Mobile Repair',
      amount : 'Rs . 120',
      date : new Date(2021, 10, 22)
    },
    {
      title : 'Gym membership',
      amount : 'Rs. 1000',
      date : new Date(2021, 10, 12)

    }
  ]
  
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
