import react from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props)=>{
    const dataPointvalues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointvalues);

    return(
        <div className='chart'>
            {props.dataPoints.map(dataPoint=><ChartBar label={dataPoint.label} key={dataPoint.label} value = {dataPoint.value} maxValue={null}/>)}
        </div>
    )
}

export default Chart;