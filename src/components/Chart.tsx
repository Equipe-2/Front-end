import React, {Component} from 'react';
import { BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {name: 'Prod A', pv: 2400, amt: 2400},
  {name: 'Prod B', pv: 1398, amt: 2210},
  {name: 'Prod C', pv: 9800, amt: 2290},
  {name: 'Prod D', pv: 3908, amt: 2000},
  {name: 'Prod E', pv: 4800, amt: 2181},
  {name: 'Prod F', pv: 3800, amt: 2500},
  {name: 'Prod G', pv: 4300, amt: 2100},
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
