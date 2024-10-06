// import React from 'react';
// import { LineChart, Line, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
// import { Typography } from 'antd';

// const { Title } = Typography;

// const dataLineChart = [
//   { name: 'Jan', uv: 4000 },
//   { name: 'Feb', uv: 3000 },
//   { name: 'Mar', uv: 2000 },
//   { name: 'Apr', uv: 2780 },
//   { name: 'May', uv: 1890 },
//   { name: 'Jun', uv: 2390 },
//   { name: 'Jul', uv: 3490 },
// ];

// const ClientOrder = () => (
//   <>
//     <Title style={{color: '#fff'}} level={4}>Total Order</Title>
//     <ResponsiveContainer width="100%" height={150}>
//       <AreaChart data={dataLineChart}>
//         <Tooltip />
//         <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" dot={false} />
//       </AreaChart>
//     </ResponsiveContainer>
//   </>
// );

// export default ClientOrder;








import React, { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
import { Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const dataLineChart = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

const ClientOrder = () => {
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/order-count`);
        if(response.data.success){
          setOrderCount(response.data.orderCount);
        }
      } catch (error) {
        console.error('Failed to fetch order count:', error);
      }
    };

    fetchOrderCount();
  }, []);

  return (
    <>
      <Title style={{ color: '#fff' }} level={4}>Total Orders: {orderCount}</Title>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={dataLineChart}>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default ClientOrder;
