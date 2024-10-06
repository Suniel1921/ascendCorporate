import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OtpVerification = ({ email, onClose }) => {
  const [otp, setOTP] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (otp.trim() === '') {
      toast.error('Please enter the OTP');
    } else {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/verifyOTP`, { email, otp });

        if (response.data.success) {
          toast.success(response.data.message);
          onClose();
          navigate('/');
        } else {
          toast.error(`OTP verification failed: ${response.data.message}`);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Failed to verify OTP');
        }
      }
    }
  };

  return (
    <Modal
      open={true}
      title="Enter OTP"
      onCancel={onClose}
      footer={[
        <Button key="verify" type="primary" onClick={handleVerify} style={{ background: '#7371F9' }}>
          Verify OTP
        </Button>,
      ]}
    >
      <p style={{ marginBottom: '14px' }}>
        We have sent an OTP to your email. Please check your email and enter the OTP below to verify your email address.
      </p>
      <Input
        type="number"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter Your OTP"
        style={{ height: '38px' }}
      />
    </Modal>
  );
};

export default OtpVerification;
