
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin, Alert } from 'antd'; // Import Ant Design components
import SideMenu from '../../sideMenu/SideMenu';
import './UserNewOrder.css'; // Import your CSS file

const UserNewOrder = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all contact data
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/userNewOrderContact`);
      // console.log(response); // Log the response for debugging
      if (response.data.success) {
        setContacts(response.data.contacts); // Ensure this is set correctly
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Define columns for the Ant Design table
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'contactEmail',
      key: 'contactEmail',
    },
    {
      title: 'Primary Phone',
      dataIndex: 'primaryPhone',
      key: 'primaryPhone',
      render: (text) => text || 'N/A', // Render 'N/A' if there's no phone number
    },
    {
      title: 'Secondary Phone',
      dataIndex: 'secondaryPhone',
      key: 'secondaryPhone',
      render: (text) => text || 'N/A', // Render 'N/A' if there's no phone number
    },
   
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
      render: (text) => text || 'N/A', // Render 'N/A' if there's no industry
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (text) => text || 'N/A', // Render 'N/A' if there's no message
    },
  ];

  return (
    <div className="userDocumentsContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer">
          <SideMenu />
        </div>

        <div className="container newOrder">
          <h3>User New Order</h3>

          {loading ? (
            <Spin tip="Loading contacts..." />
          ) : error ? (
            <Alert message="Error" description={error} type="error" />
          ) : (
            <Table
              dataSource={contacts}
              columns={columns}
              rowKey="_id" // Use _id as the unique key for each row
              pagination={false} // Disable pagination, if desired
              scroll={{ x: 'max-content' }} // Allow horizontal scrolling for long content
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNewOrder;
