// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TotalSales = () => {
//     const [totalSales, setTotalSales] = useState(0);

//     // Function to fetch total sales from the API
//     const fetchTotalSales = async () => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/totalsaleprice`);
//             const totalAmount = response.data.totalSales; // Adjust based on your API response structure
//             setTotalSales(totalAmount);
//         } catch (error) {
//             console.error('Error fetching total sales:', error);
//         }
//     };

//     useEffect(() => {
//         fetchTotalSales();

//         // Set an interval to fetch total sales every minute
//         const interval = setInterval(() => {
//             fetchTotalSales();
//         }, 60000); // Fetch data every 60 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="charts chartBox3">
//             <h3>Total Sales</h3>
//             <p>${totalSales.toFixed(2)}</p>
//         </div>
//     );
// };

// export default TotalSales;










import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const TotalSales = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [salesData, setSalesData] = useState([]);

    // Function to fetch total sales from the API
    const fetchTotalSales = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/totalsaleprice`);
            const totalAmount = response.data.totalSales; // Adjust based on your API response structure
            setTotalSales(totalAmount);

            // Update salesData for the chart.
            setSalesData(prevData => [
                ...prevData,
                { name: new Date().toLocaleTimeString(), sales: totalAmount },
            ]);
        } catch (error) {
            console.error('Error fetching total sales:', error);
        }
    };

    useEffect(() => {
        fetchTotalSales();

        // Set an interval to fetch total sales every minute
        const interval = setInterval(() => {
            fetchTotalSales();
        }, 60000); // Fetch data every 60 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="charts chartBox3">
            <h3>Total Sales</h3>
            <p>${totalSales.toFixed(2)}</p>
            <ResponsiveContainer width="100%" height={130}> {/* Adjusted height */}
                <LineChart data={salesData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalSales;
