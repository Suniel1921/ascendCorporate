// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Progress, Typography } from 'antd';
// import 'antd/dist/reset.css'; 

// const { Title } = Typography;

// const TotalPercentageOfWork = () => {
//   const [percentage, setPercentage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         // const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        
//         // Log the API response to verify the structure
//         console.log('API Response:', response.data);

//         // Extract the orders from the response
//         const orders = response.data.orderInfo; // Make sure to access `orderInfo`

//         if (!Array.isArray(orders)) {
//           throw new Error('Unexpected data format');
//         }

//         // Calculate the percentage based on the order status
//         const statuses = orders.map(order => {
//           switch (order.status) {
//             case 'verified':
//               return 100;
//             case 'processing':
//               return 50;
//             case 'pending':
//             default:
//               return 0;
//           }
//         });

//         // Average the percentages and round to the nearest integer
//         const averagePercentage = statuses.length > 0 ? 
//           Math.round(statuses.reduce((acc, val) => acc + val, 0) / statuses.length) : 
//           0;

//         setPercentage(averagePercentage);
//       } catch (error) {
//         setError('Error fetching orders');
//         console.error('Error fetching orders:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Define colors for different percentage ranges
//   const getStrokeColor = (percent) => {
//     if (percent === 100) return 'green';
//     if (percent === 50) return 'orange';
//     if (percent === 0) return 'red';
//     return 'blue';
//   };

//   return (
//     <div className="TotalPercentageOfWorkContainer">
//       <div className="container">
//         <Title style={{color: '#fff'}} level={4}>Total Percentage of Work</Title>
//         <Progress
//           type="circle"
//           percent={percentage}
//           format={percent => `${percent}%`}
//           strokeColor={getStrokeColor(percentage)}
//           style={{ width: '100px', height: '100px' }} // Ensure size for visibility
//         />
//       </div>
//     </div>
//   );
// };

// export default TotalPercentageOfWork;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Progress, Typography } from 'antd';
import 'antd/dist/reset.css'; 

const { Title } = Typography;

const TotalPercentageOfWork = () => {
  const [percentage, setPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        
        // Log the API response to verify the structure
        console.log('API Response:', response.data);

        // Extract the orders from the response
        const orders = response.data.orderInfo; // Make sure to access `orderInfo`

        if (!Array.isArray(orders)) {
          throw new Error('Unexpected data format');
        }

        // Calculate the percentage based on the order status
        const statuses = orders.map(order => {
          switch (order.status) {
            case 'verified':
              return 100;
            case 'processing':
              return 50;
            case 'pending':
            default:
              return 0;
          }
        });

        // Average the percentages and round to the nearest integer
        const averagePercentage = statuses.length > 0 ? 
          Math.round(statuses.reduce((acc, val) => acc + val, 0) / statuses.length) : 
          0;

        setPercentage(averagePercentage);
      } catch (error) {
        setError('Error fetching orders');
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Define colors for different percentage ranges
  const getStrokeColor = (percent) => {
    if (percent === 100) return 'green';
    if (percent === 50) return 'orange';
    if (percent === 0) return 'red';
    return 'blue';
  };

  return (
    <div className="TotalPercentageOfWorkContainer">
      <div className="container">
        <Title style={{color: '#fff'}} level={4}>Total Percentage of Work</Title>
        <Progress
          type="circle"
          percent={percentage}
          format={percent => `${percent}%`}
          strokeColor={getStrokeColor(percentage)}
          style={{ width: '100px', height: '100px' }} // Ensure size for visibility
        />
      </div>
    </div>
  );
};

export default TotalPercentageOfWork;
