import React, {Component} from 'react';
import { BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Prod 1', pv: 2500, amt: 2400},
  {name: 'Prod 2', pv: 1400, amt: 2210},
  {name: 'Prod 3', pv: 9800, amt: 2290},
  {name: 'Prod 4', pv: 3900, amt: 2000},
  {name: 'Prod 5', pv: 4800, amt: 2181},
];

class SimpleLineChart extends Component {
  
  render () {
    return (
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{r: 8}}
          />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='name'/>
        <Legend />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
