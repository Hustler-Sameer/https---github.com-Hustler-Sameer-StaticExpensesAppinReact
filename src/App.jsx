
import './App.css'

import Expenses1 from './components/Expenses1';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
   
  const addExpenseHandler = expense => {
    console.log('In App.jsx file');
    console.log(expense);
  }

  return (
    <div>
    
    <NewExpense onExpenseAdd = {addExpenseHandler}></NewExpense>
    <Expenses1 items={expenses}/>
    </div>
  );
};


 

  


export default App
