import "./Expenses1.css";
import ExpenseItem from "./Expenses";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";

function Expenses1(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
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

  return (
    <div className="expenses1">
      <h2>Ganpati Bapppa Morya</h2>
      <ExpensesFilter
        selected={filteredYear}
        onChange={filterChangeHandler}
      ></ExpensesFilter>
      <p> Dates for Years {filteredInfoTextYear} is hidden </p>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      
    </div>
  );
}
export default Expenses1;
