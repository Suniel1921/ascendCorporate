// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../sideMenu/SideMenu';
// import '../manageOrders/manageOrder.css';
// import toast from 'react-hot-toast'

// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedStatuses, setSelectedStatuses] = useState({});
//   const statuses = ['pending', 'processing', 'verified'];

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error fetching orders', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = (orderId, newStatus) => {
//     setSelectedStatuses(prevStatuses => ({
//       ...prevStatuses,
//       [orderId]: newStatus
//     }));
//   };

//   const updateStatus = async (orderId) => {
//     const newStatus = selectedStatuses[orderId];
//     try {
//       await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/updateOrderStatus`, { orderId, status: newStatus });
//       setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
//       setSelectedStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: '' })); // Reset the selected status
//       toast.success('Data udpated')
      
//     } catch (error) {
//       console.error('Error updating order status', error);
//     }
//   };

//   return (
//     <div className="ManageOrdersContainer">
//       <div className="adminDashboard">
//         <div className="sideMenuContainer"><SideMenu/></div>
//         <div className="container">
//           <h3 className='manageOrderHeading'>Manage Your Customer Order</h3>
//           <div className="ordersTable">
//             <div className="tableHeader">
//               <div>User</div>
//               <div>Document</div>
//               <div>Status</div>
//               <div>Action</div>
//             </div>
//             {orders.map(order => (
//               <div className="tableRow" key={order._id}>
//                 <div>{order.user.name}</div>
//                 <div>{order.items.map(item => item.heading).join(', ')}</div>
//                 <div>
//                   <select className='selectProcessingDropdown'
//                     value={selectedStatuses[order._id] || order.status}
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                   >
//                     {statuses.map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <button className='adminUpdateBtn' onClick={() => updateStatus(order._id)}>Update</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrders;












// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../sideMenu/SideMenu';
// import { Pagination } from 'antd';
// import toast from 'react-hot-toast';
// import '../manageOrders/manageOrder.css';

// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedStatuses, setSelectedStatuses] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 5; // Number of orders per page for pagination 😊
//   const statuses = ['pending', 'processing', 'verified'];

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
//         console.log('order res', response)
        
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error fetching orders', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = (orderId, newStatus) => {
//     setSelectedStatuses(prevStatuses => ({
//       ...prevStatuses,
//       [orderId]: newStatus
//     }));
//   };

//   const updateStatus = async (orderId) => {
//     const newStatus = selectedStatuses[orderId];
//     try {
//       await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/updateOrderStatus`, { orderId, status: newStatus });
//       setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
//       setSelectedStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: '' })); // Reset the selected status
//       toast.success('Data updated');
//     } catch (error) {
//       console.error('Error updating order status', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Calculate the orders to be shown on the current page
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedOrders = orders.slice(startIndex, startIndex + pageSize);

//   return (
//     <div className="ManageOrdersContainer">
//       <div className="adminDashboard">
//         <div className="sideMenuContainer"><SideMenu/></div>
//         <div className="container">
//           <h3 className='manageOrderHeading'>Manage Your Customer Order</h3>
//           <div className="ordersTable">
//             <div className="tableHeader">
//               <div>User</div>
//               <div>Document</div>
//               <div>Status</div>
//               <div>Action</div>
//             </div>
//             {paginatedOrders.map(order => (
//               <div className="tableRow" key={order._id}>
//                 <div>{order.user.name}</div>
//                 <div>{order.items.map(item => item.heading).join(', ')}</div>
//                 <div>
//                   <select className='selectProcessingDropdown'
//                     value={selectedStatuses[order._id] || order.status}
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                   >
//                     {statuses.map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <button className='adminUpdateBtn' onClick={() => updateStatus(order._id)}>Update</button>
//                   <button className='adminUpdateBtn'>view docs</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Pagination
//             current={currentPage}
//             pageSize={pageSize}
//             total={orders.length}
//             onChange={handlePageChange}
//             style={{ textAlign: 'center', marginTop: '20px' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrders;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideMenu from '../../sideMenu/SideMenu';
// import { Pagination } from 'antd';
// import toast from 'react-hot-toast';
// import '../manageOrders/manageOrder.css';

// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedStatuses, setSelectedStatuses] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 5; // Number of orders per page for pagination 😊
//   const statuses = ['pending', 'processing', 'verified'];

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
//         // console.log('Order response:', response.data);

//         if (response.data.success) {
//           setOrders(response.data.orderInfo);
//         } else {
//           toast.error(response.data.message || 'Failed to fetch orders');
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         toast.error('Error fetching orders');
//       }
//     };

//     fetchOrders();
//   }, []);

//   const handleStatusChange = (orderId, newStatus) => {
//     setSelectedStatuses(prevStatuses => ({
//       ...prevStatuses,
//       [orderId]: newStatus
//     }));
//   };

//   const updateStatus = async (orderId) => {
//     const newStatus = selectedStatuses[orderId];
//     try {
//       const response = await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/updateOrderStatus`, { orderId, status: newStatus });

//       if (response.data.success) {
//         setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
//         setSelectedStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: '' }));
//         toast.success(response.data.message);
//         // toast.success('Order status updated');
//       } else {
//         toast.error(response.data.message || 'Failed to update order status');
//       }
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       toast.error('Error updating order status');
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Calculate the orders to be shown on the current page
//   const startIndex = (currentPage - 1) * pageSize;
//   const paginatedOrders = orders.slice(startIndex, startIndex + pageSize);

//   return (
//     <div className="ManageOrdersContainer">
//       <div className="adminDashboard">
//         <div className="sideMenuContainer"><SideMenu /></div>
//         <div className="container">
//           <h3 className='manageOrderHeading'>Manage Your Customer Orders</h3>
//           <div className="ordersTable">
//             <div className="tableHeader">
//               <div>User</div>
//               <div>Document</div>
//               <div>Status</div>
//               <div>Action</div>
//             </div>
//             {paginatedOrders.map(order => (
//               <div className="tableRow" key={order._id}>
//                 <div>{order.user.name}</div>
//                 <div>{order.quoteData.map(item => item.heading).join(', ')}</div> {/* Display headings */}
//                 <div>
//                   <select className='selectProcessingDropdown'
//                     value={selectedStatuses[order._id] || order.status}
//                     onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                   >
//                     {statuses.map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <button className='adminUpdateBtn' onClick={() => updateStatus(order._id)}>Update</button>
//                   <button className='adminUpdateBtn'>View Docs</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Pagination
//             current={currentPage}
//             pageSize={pageSize}
//             total={orders.length}
//             onChange={handlePageChange}
//             style={{ textAlign: 'center', marginTop: '20px' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrders;








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../../sideMenu/SideMenu';
import { Pagination, Modal, Button } from 'antd';
import toast from 'react-hot-toast';
import '../manageOrders/manageOrder.css';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [documents, setDocuments] = useState([]);
  const pageSize = 5; // Number of orders per page for pagination 😊
  const statuses = ['pending', 'processing', 'verified'];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/getOrders`);
        console.log('Order response:', response.data);

        if (response.data.success) {
          setOrders(response.data.orderInfo);
        } else {
          toast.error(error.response.data.message);
          // toast.error(response.data.message || 'Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Error fetching orders');
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setSelectedStatuses(prevStatuses => ({
      ...prevStatuses,
      [orderId]: newStatus
    }));
  };

  const updateStatus = async (orderId) => {
    const newStatus = selectedStatuses[orderId];
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/updateOrderStatus`, { orderId, status: newStatus });

      if (response.data.success) {
        setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
        setSelectedStatuses(prevStatuses => ({ ...prevStatuses, [orderId]: '' }));
        toast.success(response.data.message);
        // toast.success('Order status updated');
      } else {
        toast.error(response.data.message || 'Failed to update order status');
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Error updating order status');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const showDocuments = async (orderId) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/fileUpload/allDocuments`);
      if (response.data.success) {
        setDocuments(response.data.getAllDocuments);
        setCurrentOrder(orderId);
        setVisible(true);
      } else {
        toast.error(response.data.message || 'Failed to fetch documents');
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
      toast.error('Error fetching documents');
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setCurrentOrder(null);
  };

  // Calculate the orders to be shown on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedOrders = orders.slice(startIndex, startIndex + pageSize);

  return (
    <div className="ManageOrdersContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer"><SideMenu /></div>
        <div className="container">
          <h3 className='manageOrderHeading'>Manage Your Customer Orders</h3>
          <div className="ordersTable">
            <div className="tableHeader">
              <div>User</div>
              <div>Document</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            {paginatedOrders.map(order => (
              <div className="tableRow" key={order._id}>
                <div>{order.user.name}</div>
                <div>{order.quoteData.map(item => item.heading).join(', ')}</div> {/* Display headings */}
                <div>
                  <select className='selectProcessingDropdown'
                    value={selectedStatuses[order._id] || order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className='adminUpdateBtn' onClick={() => updateStatus(order._id)}>Update</button>
                  <button className='adminUpdateBtn' onClick={() => showDocuments(order._id)}>View Docs</button>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={orders.length}
            onChange={handlePageChange}
            style={{ textAlign: 'center', marginTop: '20px' }}
          />
        </div>
      </div>

      {/* Ant Design Modal for Viewing Documents */}
      <Modal
        title="Document Details"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        {currentOrder && documents.length > 0 ? (
          <div>
            <h4>Documents for Order ID: {currentOrder}</h4>
            {documents.map(doc => (
              <div key={doc._id}>
                <h3>{doc.name}</h3>
                <div>
                  {doc.images.map((image, index) => (
                    <img key={index} src={image} alt={`Document ${index}`} width={200} style={{ marginRight: 8 }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No documents available</p>
        )}
      </Modal>
    </div>
  );
};

export default ManageOrders;
