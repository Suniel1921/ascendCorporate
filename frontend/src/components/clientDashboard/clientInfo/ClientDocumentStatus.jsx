
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Modal } from 'antd';
// import { CheckCircleTwoTone } from '@ant-design/icons';
// import './clientDocumentStatus.css';  // Ensure this path is correct

// const ClientDocumentStatus = () => {
//   const [documents, setDocuments] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/yourOrder`);
//         console.log(response.data);  // Debugging line to check the data structure
//         if (response.data.success && Array.isArray(response.data.orderInfo)) {
//           setDocuments(response.data.orderInfo);
//         } else {
//           console.error('Data fetch was unsuccessful');
//         }
//       } catch (error) {
//         console.error('Error fetching documents', error);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   useEffect(() => {
//     if (documents.some(doc => doc.status === 'verified')) {
//       setShowModal(true);
//     }
//   }, [documents]);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'pending':
//         return 'statusPending';
//       case 'processing':
//         return 'statusProcessing';
//       case 'verified':
//         return 'statusVerified';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="clientDocumentStatusContainer">
//       <div className="headerContainer">
//         <h3>Documents</h3>
//         <h3>Status</h3>
//       </div>
//       <div className="tableContainer">
//         {documents.map(doc => (
//           <div className="rowContainer" key={doc._id}>
//             <div className="cellContainer">
//               <p>{doc.items[0]?.heading}</p>  
//             </div>
//             <div className="cellContainer">
//               <span className={`statusLabel ${getStatusClass(doc.status)}`}>{doc.status}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Modal
//         title="Congratulations!"
//         visible={showModal}
//         onCancel={handleCloseModal}
//         footer={null}
//       >
//         <div style={{ textAlign: 'center' }}>
//           <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '48px' }} />
//           <h2>Your document has been verified!</h2>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ClientDocumentStatus;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Pagination } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import './clientDocumentStatus.css';  // Ensure this path is correct

const ClientDocumentStatus = () => {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const pageSize = 6;  // Number of documents per page

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/yourOrder`);
        console.log(response.data);  

        if (response.data.success && Array.isArray(response.data.orderInfo)) {
          setDocuments(response.data.orderInfo);
        } else {
          console.error('Data fetch was unsuccessful or no documents found');
        }
      } catch (error) {
        console.error('Error fetching documents', error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    if (documents.some(doc => doc.status === 'verified')) {
      setShowModal(true);
    }
  }, [documents]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return 'statusPending';
      case 'processing':
        return 'statusProcessing';
      case 'verified':
        return 'statusVerified';
      default:
        return '';
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the documents to be shown on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedDocuments = documents.slice(startIndex, startIndex + pageSize);

  return (
    <div className="clientDocumentStatusContainer">
      <div className="headerContainer">
        <h3>Documents</h3>
        <h3>Status</h3> 
      </div>
      <div className="tableContainer">
        {paginatedDocuments.map(doc => (
          <div className="rowContainer" key={doc._id}>
            <div className="cellContainer">
              <h4>{doc.quoteData[0]?.heading}</h4>  {/* Accessing `quoteData` instead of `items` */}
            </div>
            <div className="cellContainer">
              <span className={`statusLabel ${getStatusClass(doc.status)}`}>{doc.status}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={documents.length}
        onChange={handlePageChange}
        style={{ textAlign: 'center', marginTop: '20px' }}
      />
      <Modal
        title="Congratulations!"
        visible={showModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '48px' }} />
          <h2>Your document has been verified!</h2>
        </div>
      </Modal>
    </div>
  );
};

export default ClientDocumentStatus;
