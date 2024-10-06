import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ClientSideMenu from '../ClientSideMenu';
import '../clientInfo/uploadDocuments.css';

const UploadDocuments = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error('Please enter a name');
      return;
    }

    if (files.length === 0) {
      toast.error('No files selected');
      return;
    }

    // Notify user that the upload is starting
    const toastId = toast.loading('Please wait, Documents are uploading...');

    // Create a FormData object
    const formData = new FormData();
    formData.append('name', name);
    Array.from(files).forEach((file) => {
      formData.append('images', file);
    });

    try {
      // Make the API call to upload files
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/fileUpload/uploadDocuments`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Clear form fields
        setName('');
        setFiles([]);
      } else {
        toast.error(`Error: ${response.data.message}`);
      }
    } catch (error) {
      toast.error('Upload failed. Please try again.');
    } finally {
      // Remove the loading toast
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="uploadDocumentsContainer">
      <div className="clientDashboard">
        <div className="client_Side_Menu_Container">
          <ClientSideMenu />
        </div>
        <div className="uploadDocuments">
          <h3>Upload Your Documents from Here</h3>
          <form onSubmit={handleUpload} className="uploadForm">
            <input
              type="text"
              placeholder="Enter document name"
              value={name}
              onChange={handleNameChange}
              className="nameInput"
            />
            <label htmlFor="fileInput" className="customFileUpload">
              Choose files
              <input
                id="fileInput"
                type="file"
                multiple
                onChange={handleFileChange}
                className="fileInput"
              />
            </label>
            <button type="submit" className="uploadButton">
              Upload Documents
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
