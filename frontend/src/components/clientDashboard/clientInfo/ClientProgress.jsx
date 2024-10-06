// import React from 'react';
// import { LineChart, Line, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

// const data = [
//   { name: 'Week 1', uv: 70 },
//   { name: 'Week 2', uv: 80 },
//   { name: 'Week 3', uv: 75 },
//   { name: 'Week 4', uv: 90 },
// ];

// const ClientProgress = () => (
//   <div className='client_charts box2'>
//     <h4>Progress</h4>
//     <ResponsiveContainer width="100%" height={150}>
//       <LineChart data={data}>
//         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//         <Tooltip />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// export default ClientProgress;










// import React from 'react';
// import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
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

// const ClientProgress = () => (
//   <>
//     <Title level={4}>Progress</Title>
//     <ResponsiveContainer width="100%" height={150}>
//       <LineChart data={dataLineChart}>
//         <Tooltip />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
//       </LineChart>
//     </ResponsiveContainer>
//   </>
// );

// export default ClientProgress;







import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Typography } from 'antd';

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

const ClientProgress = () => (
  <>
    <Title  level={4}>Progress</Title>
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={dataLineChart}>
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default ClientProgress;

