import { useEffect } from "react";
import "./Chart_Bar.css"


const Chart_Bar = (props) =>{
    let barFillHeight = '0%';
    console.log(props.max)
    if(props.maxValue > 0){
        barFillHeight =  Math.round((props.value / props.maxValue) * 100) + '%';
    }
   

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height:barFillHeight}}>
                    {console.log(barFillHeight)}

                </div>
                </div>
                
                <div className='chart-bar__label'>
                    {props.label}
                    {console.log(props.label)}

                 
                </div>
            
        </div>
    )

}

export default Chart_Bar;