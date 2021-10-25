import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const addExpenseData = (expense) => {
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseData} />
      <Expenses/>
    </div>
  );
}

export default App;
