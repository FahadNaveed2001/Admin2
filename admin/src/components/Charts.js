import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    sales: 4000,
    product: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    sales: 3000,
    product: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    sales: 2000,
    product: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    sales: 2780,
    product: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    sales: 1890,
    product: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    sales: 2390,
    product: 3800,
    amt: 2500,
  },

];

const Charts = () => {



  return (
    <div className='p-2 w-[500px] md:h-[100vh] md:w-[90vw] ml-[-25px] md:ml-[0]'>
    <div className='px-[30px]  text-[#000000] text-[20px] text-center md:text-[50px] md:text-start mb-[50px] font-bold'><h1>Stats of your Six months</h1></div>
   
    <ResponsiveContainer width="100%" height="80%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" className='md:font-bold font-semibold mt-2'/>
      <YAxis className='font-bold'/>
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#38BDF8" activeBar={<Rectangle fill="pink"/>} />
      <Bar dataKey="product" fill="#38bff896" activeBar={<Rectangle fill="gold" />} />
    </BarChart>
  </ResponsiveContainer>


 
    
    
    
    </div>
  )
}

export default Charts