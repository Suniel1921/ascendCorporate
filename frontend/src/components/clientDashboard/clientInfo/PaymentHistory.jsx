// import React from 'react'

// const PaymentHistory = () => {
//   return (
//     <>
//     <div className="PaymentHistoryContainer">
//         <div className="container">
//             <h3>PaymentHistor</h3>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default PaymentHistory






import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import { Typography } from 'antd';

const { Title } = Typography;

const dataBarChart = [
  { name: 'A', uv: 300 },
  { name: 'B', uv: 200 },
  { name: 'C', uv: 100 },
  { name: 'D', uv: 400 },
  { name: 'E', uv: 300 },
  { name: 'F', uv: 200 },
];

const PaymentHistory = () => (
  <>
    <Title style={{color: '#fff'}} level={4}>Payments History</Title>
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={dataBarChart}>
        {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
        <Tooltip />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </>
);

export default PaymentHistory;
