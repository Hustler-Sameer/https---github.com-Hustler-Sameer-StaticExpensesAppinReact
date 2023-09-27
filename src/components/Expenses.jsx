import './Expenses.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import React , {useState} from 'react';
import ExpensesFilter from './NewExpense/ExpensesFilter';


function ExpenseItem(props)  {
   const [title , setTitle] = useState(props.title);
   console.log("Component evaluated by React");

  //let title = props.title;


  const clickHandler = () => {
    console.log("Clicked");
    
     setTitle('Updated!!');
    console.log(title);
  }
    
    return(
      <div>
        
        <Card className='expense-item'>
        
         
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        
      </Card>
      </div>
      
    );
}
export default  ExpenseItem;