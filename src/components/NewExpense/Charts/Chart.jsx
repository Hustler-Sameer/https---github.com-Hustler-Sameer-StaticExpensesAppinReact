import React, { useEffect } from "react";
import './Chart.css';
import Chart_Bar from "./Chart_Bar"


const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    let totalMaximum = Math.max(...dataPointValues)
    //math.max needs arg like max(1,3,4 ) hence going with something else , hence we are pulling out elements 
    //from dataPointValues using max operator in Math.max() and now totalMaximum will recieve 12 elements to compare
    


    return (
        <div className="chart">
            {props.dataPoints.map(dataPoints => (
                 <Chart_Bar key={dataPoints.label}
                 value={dataPoints.value} 
                 maxValue={totalMaximum}
                  label={dataPoints.label} />
            ))}
        </div>
    )

}

export default Chart;