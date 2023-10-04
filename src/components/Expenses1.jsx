import "./Expenses1.css";
import ExpenseItem from "./Expenses";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./NewExpense/ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses1(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredInfoTextYear, setInfoTextYear] = useState(
    "2019 , 2021 && 2022"
  );

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses1.jsx", selectedYear);
    setFilteredYear(selectedYear);

    if (selectedYear === "2019") {
      setInfoTextYear("2020,2021 && 2022");
    } else if (selectedYear === "2020") {
      setInfoTextYear("2019,2021 && 2022");
    } else if (selectedYear === "2021") {
      setInfoTextYear("2019 , 2020 && 2022");
    } else setInfoTextYear("2019 , 2020 && 2021");
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;  // Now this year will return true if 
    //the year matches the filtered year we will get true or else false
  })
  // let expensesContent = <p>No expenses found</p>
  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense) => {
  //       console.log(expense)
  //       return <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     })
  // }

  return (
    <div className="expenses1">
      <h2>Ganpati Bapppa Morya</h2>
      <ExpensesFilter
        selected={filteredYear}
        onChange={filterChangeHandler}
      ></ExpensesFilter>
      <p> Dates for Years {filteredInfoTextYear} is hidden </p>
      <ExpenseChart expenses={filteredExpenses}/>
       
      <ExpenseList items = {filteredExpenses} />



    </div>
  )
}
export default Expenses1;
