// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Table, Image, Spin, Alert } from 'antd';
// import SideMenu from "../../sideMenu/SideMenu";
// import './userDocuments.css';

// // Define the columns for the Ant Design Table
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Images',
//     dataIndex: 'images',
//     key: 'images',
//     render: (images) => (
//       <div>
//         {images.map((image, index) => (
//           <Image key={index} src={image} alt={`Document ${index}`} width={100} style={{ marginRight: 8 }} />
//         ))}
//       </div>
//     ),
//   },
// ];

// const UserDocuments = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         setLoading(true);       
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/fileUpload/allDocuments`);

//         if (response.data.success) {
//           const documents = response.data.getAllDocuments;
          
//           // Transform the data to match the columns
//           const formattedData = documents.map(doc => ({
//             key: doc._id, 
//             name: doc.name,
//             images: doc.images 
//           }));
//           setData(formattedData);
//         } else {
//           throw new Error(response.data.message || 'Failed to fetch documents');
//         }
//       } catch (error) {
//         setError(error.message || 'An error occurred');
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchDocuments();
//   }, []);

//   if (loading) return <Spin tip="Loading..." />;
//   if (error) return <Alert message="Error" description={error} type="error" />;

//   return (
//     <div className="userDocumentsContainer">
//       <div className="adminDashboard">
//         <div className="sideMenuContainer">
//           <SideMenu />
//         </div>
//         <div className="container">
//           <div className="userDocuments">
//             <h3>User Documents</h3>
//             <Table dataSource={data} columns={columns} pagination={false} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDocuments;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Image, Spin, Alert } from "antd";
import SideMenu from "../../sideMenu/SideMenu";
import './userDocuments.css';

// Define the columns for the Ant Design Table
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Images',
    dataIndex: 'images',
    key: 'images',
    render: (images) => (
      <div>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Document ${index}`} width={100} style={{ marginRight: 8 }} />
        ))}
      </div>
    ),
  },
];

const UserDocuments = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleFetchError = (error) => {
    console.error('Fetch error:', error);
    setError(error.message || 'An error occurred while fetching documents');
  };

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/fileUpload/allDocuments`);

      if (responseData.success) {
        const formattedData = responseData.getAllDocuments.map(doc => ({
          key: doc._id,
          name: doc.name,
          images: doc.images,
        }));
        setData(formattedData);
      } else {
        handleFetchError(new Error(responseData.message || 'Failed to fetch documents'));
      }
    } catch (error) {
      handleFetchError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  if (loading) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <div className="userDocumentsContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer">
          <SideMenu />
        </div>
        <div className="container">
          <div className="userDocuments">
            <h3>User Documents</h3>
            {data.length === 0 ? (
              <Alert
                message="No Documents Found"
                description="Please upload documents."
                type="info"
                showIcon
              />
            ) : (
              <Table dataSource={data} columns={columns} pagination={false} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDocuments;
