import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React , {useEffect, useState} from 'react';
import ExpensesFilter from './NewExpense/ExpensesFilter';


function ExpenseItem(props)  {
   const [title , setTitle] = useState(props.title);
   console.log("Component evaluated by React");

  //let title = props.title;


  // const clickHandler = () => {
  //   console.log("Clicked");
    
  //    setTitle('Updated!!');
  //   console.log(title);
  // }
    
    return(
      <li>
      <div>
        
        <Card className='expense-item'>
        
         
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${parseInt(props.amount)}</div>
        </div>
        
        
      </Card>
      </div>
      </li>
      
    );
}
export default  ExpenseItem;