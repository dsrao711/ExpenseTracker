import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';



function App() {

  const expenses = [
    {
      id : 12 ,
      title: 'Car Insurance',
      amount: 'Rs. 10,000',
      date: new Date(2021, 2, 12)
    },
    {
      id  : 129,
      title: 'Tuition Fee',
      amount: 'Rs. 5000',
      date: new Date(2021, 12, 1)
    },
    {
      id : 112 ,
      title: 'Mobile Repair',
      amount: 'Rs . 120',
      date: new Date(2021, 10, 22)
    },
    {
      id : 122, 
      title: 'Gym membership',
      amount: 'Rs. 1000',
      date: new Date(2021, 10, 12)

    }
  ]

  const addExpenseData = (expense) => {
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
