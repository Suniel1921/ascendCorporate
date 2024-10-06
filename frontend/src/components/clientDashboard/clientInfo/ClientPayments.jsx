// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // Register the required components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const ClientPayments = () => {
//   // Sample data for the chart
//   const data = {
//     labels: ['Credit Card', 'PayPal', 'Bank Transfer', 'Other'], // Payment methods
//     datasets: [
//       {
//         label: 'Payment Distribution',
//         data: [50, 25, 15, 10], // Sample data (percentages or amounts)
//         backgroundColor: [
//           'rgba(75, 192, 192, 0.6)',
//           'rgba(153, 102, 255, 0.6)',
//           'rgba(255, 159, 64, 0.6)',
//           'rgba(255, 99, 132, 0.6)',
//         ],
//         borderColor: [
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 99, 132, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             return `${context.label}: ${context.raw}%`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <div className="clientPaymentsContainer">
//         <div className="container">
//           <h3>Client Payments</h3>
//           <div style={{ width: '100%', height: '120px' }}> {/* Adjust height as needed */}
//             <Pie data={data} options={options} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ClientPayments;








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

const ClientPayments = () => (
  <>
    <Title style={{color: '#fff'}} level={4}>Payments</Title>
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={dataBarChart}>
        <Tooltip />
        <Bar dataKey="uv" fill="#2596be" />
      </BarChart>
    </ResponsiveContainer>
  </>
);

export default ClientPayments;
