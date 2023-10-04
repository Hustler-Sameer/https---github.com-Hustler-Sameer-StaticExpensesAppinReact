import React from "react";
import './Chart.css';
import Chart_Bar from "./Chart_Bar"


const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    let totalMaximum = Math.max(...dataPointValues)
    //math.max needs arg like max(1,3,4 ) hence going with something else , hence we are pulling out elements 
    //from dataPointValues using max operator in Math.max() and now totalMaximum will recieve 12 elements to compare

    


    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                <Chart_Bar key={dataPoint.label}
                 value={dataPoint.value} 
                 maxValue={totalMaximum}
                  label={dataPoint.label} />
            })}
        </div>
    )

}

export default Chart;