import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin, Alert } from 'antd';
import SideMenu from '../../sideMenu/SideMenu';
import '../userDetails/UserNewOrder.css'

const UserNewOrder = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/userNewOrderContact`);
      if (response.data.success) {
        setContacts(response.data.contacts); 
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

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
      render: (text) => text || 'N/A',
    },
    {
      title: 'Secondary Phone',
      dataIndex: 'secondaryPhone',
      key: 'secondaryPhone',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (text) => text || 'N/A',
    },
  ];

  return (
    <div className="userDocumentsContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer">
          <SideMenu />
        </div>

        <div className="container newOrder" style={{marginTop:'84px'}}>
          <h3>User New Order</h3>

          {loading ? (
            <Spin tip="Loading contacts..." />
          ) : error ? (
            <Alert message="Error" description={error} type="error" />
          ) : (
            <Table
              dataSource={contacts}
              columns={columns}
              rowKey="_id"
              pagination={{ pageSize: 6 }}
              scroll={{ x: 'max-content' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNewOrder;
