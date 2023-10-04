import React from "react";
import Chart from "./NewExpense/Charts/Chart";



const ExpenseChart = props => {

    const chartDataPoints = [
        {
            label : 'Jan' ,
            value: 0

        },
        {
            label : 'Feb' ,
            value: 0

        },
        {
            label : 'March' ,
            value: 0

        },
        {
            label : 'April' ,
            value: 0

        },
        {
            label : 'May' ,
            value: 0

        },
        {
            label : 'June' ,
            value: 0

        },
        {
            label : 'July' ,
            value: 0

        },
        {
            label : 'August' ,
            value: 0

        },
        {
            label : 'September' ,
            value: 0

        },
        {
            label : 'October' ,
            value: 0

        },
        {
            label : 'November' ,
            value: 0

        },
        {
            label : 'December' ,
            value: 0

        }
    ]
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); // Jan is set as 0 and our array also has jan at 0 Index
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints = {chartDataPoints} />


}

export default ExpenseChart;