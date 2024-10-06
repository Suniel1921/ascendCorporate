import React from 'react';
import { Modal, Typography, Button } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design CSS

const { Title, Text } = Typography;

const PopModal = ({ open, onClose }) => {
  return (
    <Modal
      visible={open}
      onCancel={onClose}
      footer={null} // Hide the default footer
      centered
      width={400}
      style={{ textAlign: 'center' }}
    >
      <Title level={4} style={{ color: '#2196F3' }}>Permission Denied</Title>
      <Text style={{ color: '#666' }}>You don't have permission to access this page.</Text>
      <div style={{ marginTop: '16px' }}>
        <Button 
          type="primary" 
          danger 
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default PopModal;
