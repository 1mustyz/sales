import React from 'react';
import { Line } from '@ant-design/charts';
import Box from '@mui/material/Box'


const LineChart = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return (
    <Box sx={{
        width:'38%', 
        height:'17rem', 
        backgroundColor:'#f7faff', 
        padding:'2rem',
        borderRadius: '4px'
        }}>
        <Line {...config} />
    </Box>
  )
};
export default LineChart;