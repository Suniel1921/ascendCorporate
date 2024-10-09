import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Pagination } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Confetti from 'react-confetti';
import './clientDocumentStatus.css';  // Ensure this path is correct

const ClientDocumentStatus = () => {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const pageSize = 6;  // Number of documents per page

  useEffect(() => {
    fetchDocuments();
  }, []);

  useEffect(() => {
    if (documents.some(doc => doc.status === 'verified')) {
      displayVerificationModal();
    }
  }, [documents]);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/yourOrder`);
      console.log('your order data is ',response)
      if (response.data.success && Array.isArray(response.data.orderInfo)) {
        setDocuments(response.data.orderInfo);
      } else {
        console.error('Data fetch was unsuccessful or no documents found');
      }
    } catch (error) {
      console.error('Error fetching documents', error);
    }
  };

  const displayVerificationModal = () => {
    setShowModal(true);
    setShowConfetti(true);
    // Stop confetti after 7 seconds
    setTimeout(() => setShowConfetti(false), 7000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      pending: 'statusPending',
      processing: 'statusProcessing',
      verified: 'statusVerified',
    };
    return statusClasses[status] || '';
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the documents to be shown on the current page
  const paginatedDocuments = documents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="clientDocumentStatusContainer">
      {showConfetti && <Confetti />} {/* Show confetti when document is verified */}

      <Header />
      <DocumentTable documents={paginatedDocuments} getStatusClass={getStatusClass} currentPage={currentPage} />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={documents.length}
        onChange={handlePageChange}
        style={{ textAlign: 'center', marginTop: '20px' }}
      />
      <VerificationModal visible={showModal} onClose={handleCloseModal} />
    </div>
  );
};

const Header = () => (
  <div className="headerContainer">
    <h3>S.No.</h3>
    <h3>Documents</h3>
    <h3>Status</h3>
  </div>
);

const DocumentTable = ({ documents, getStatusClass, currentPage }) => (
  <div className="tableContainer">
    {documents.map((doc, index) => (
      <div className="rowContainer" key={doc._id}>
        <div className="cellContainer">
          <h4>{(currentPage - 1) * 6 + index + 1}</h4> {/* Serial number calculation */}
        </div>
        <div className="cellContainer">
          <h4>{doc.quoteData[0]?.heading}</h4> {/* Accessing `quoteData` instead of `items` */}
        </div>
        <div className="cellContainer">
          <span className={`statusLabel ${getStatusClass(doc.status)}`}>{doc.status}</span>
        </div>
      </div>
    ))}
  </div>
);

const VerificationModal = ({ visible, onClose }) => (
  <Modal
    title="Congratulations!"
    visible={visible}
    onCancel={onClose}
    footer={null}
  >
    <div style={{ textAlign: 'center' }}>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '48px' }} />
      <h2>Your document has been verified!</h2>
    </div>
  </Modal>
);

export default ClientDocumentStatus;








// for generating invoice of package


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Modal, Pagination, Button } from 'antd';
// import { CheckCircleTwoTone } from '@ant-design/icons';
// import Confetti from 'react-confetti';
// import jsPDF from 'jspdf';
// import './clientDocumentStatus.css';  // Ensure this path is correct

// const ClientDocumentStatus = () => {
//   const [documents, setDocuments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showModal, setShowModal] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const pageSize = 6;  // Number of documents per page

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   useEffect(() => {
//     if (documents.some(doc => doc.status === 'verified')) {
//       displayVerificationModal();
//     }
//   }, [documents]);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/yourOrder`);
//       if (response.data.success && Array.isArray(response.data.orderInfo)) {
//         setDocuments(response.data.orderInfo);
//       } else {
//         console.error('Data fetch was unsuccessful or no documents found');
//       }
//     } catch (error) {
//       console.error('Error fetching documents', error);
//     }
//   };

//   const displayVerificationModal = () => {
//     setShowModal(true);
//     setShowConfetti(true);
//     // Stop confetti after 7 seconds
//     setTimeout(() => setShowConfetti(false), 7000);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const getStatusClass = (status) => {
//     const statusClasses = {
//       pending: 'statusPending',
//       processing: 'statusProcessing',
//       verified: 'statusVerified',
//     };
//     return statusClasses[status] || '';
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };


//   //**************generating invoce***************


// const generateInvoice = (doc) => {
//   const pdf = new jsPDF();

//   // Center the Invoice heading
//   pdf.setFontSize(20);
//   pdf.text('INVOICE', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

//   // Add company name below the invoice heading
//   pdf.setFontSize(14);
//   pdf.text('Testing Invoice', pdf.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

//   pdf.setFontSize(12);
  
//   // Greeting message with username
//   pdf.text(`Hi, ${doc.user.name}`, 20, 50);

//   // Customer Information with proper formatting
//   pdf.setFontSize(10);
//   const customerInfo = `
//     Customer Name: ${doc.contactData.firstName} ${doc.contactData.middleName} ${doc.contactData.lastName}
//     Email: ${doc.contactData.email}
//     Phone: ${doc.contactData.phoneNumber}
//     Secondary Phone: ${doc.contactData.secondaryPhoneNumber}
//     Postal Code: ${doc.contactData.postalCode}
//     City: ${doc.contactData.city}
//     State: ${doc.contactData.state}
//     Country: ${doc.contactData.country}
//   `;
//   pdf.text(customerInfo, 20, 60);

//   // Add a line to separate sections
//   pdf.line(20, 90, pdf.internal.pageSize.getWidth() - 20, 90);

//   // Document Details Section
//   pdf.setFontSize(12);
//   pdf.text('Document Details:', 20, 100);

//   let currentYPosition = 110;

//   // Loop through each document item
//   doc.quoteData.forEach((item, index) => {
//     // Display product details
//     const itemDetails = `
//       Product: ${item.heading}
//       Price: $${item.price}
//       Quantity: ${item.quantity}
//       Total: $${(item.price * item.quantity).toFixed(2)}
//     `;
//     pdf.text(itemDetails, 20, currentYPosition);
//     currentYPosition += 10; // Adjust vertical space for next section

//     // Bullet points for the feature list
//     pdf.setFontSize(10);
//     item.list.forEach((feature, i) => {
//       // Ensure proper text wrapping and spacing between bullet points
//       const lines = pdf.splitTextToSize(`• ${feature}`, pdf.internal.pageSize.getWidth() - 40);
//       pdf.text(lines, 25, currentYPosition);
//       currentYPosition += (lines.length * 7); // Add spacing based on number of lines
//     });

//     currentYPosition += 10; // Add extra space between items
//     pdf.setFontSize(12); // Reset font size for next product
//   });

//   // Additional information
//   pdf.text(`Order ID: ${doc._id}`, 20, currentYPosition + 10);
//   pdf.text(`Created At: ${new Date(doc.createdAt).toLocaleString()}`, 20, currentYPosition + 20);
//   pdf.text(`Status: ${doc.status}`, 20, currentYPosition + 30);

//   // Save the PDF
//   pdf.save(`invoice_${doc._id}.pdf`);
// };

  
  
  

//   // Calculate the documents to be shown on the current page
//   const paginatedDocuments = documents.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   return (
//     <div className="clientDocumentStatusContainer">
//       {showConfetti && <Confetti />} {/* Show confetti when document is verified */}

//       <Header />
//       <DocumentTable 
//         documents={paginatedDocuments} 
//         getStatusClass={getStatusClass} 
//         currentPage={currentPage} 
//         onGenerateInvoice={generateInvoice}
//       />
//       <Pagination
//         current={currentPage}
//         pageSize={pageSize}
//         total={documents.length}
//         onChange={handlePageChange}
//         style={{ textAlign: 'center', marginTop: '20px' }}
//       />
//       <VerificationModal visible={showModal} onClose={handleCloseModal} />
//     </div>
//   );
// };

// const Header = () => (
//   <div className="headerContainer">
//     <h3>S.No.</h3>
//     <h3>Documents</h3>
//     <h3>Status</h3>
//     <h3>Invoice</h3> {/* New Invoice Header */}
//   </div>
// );

// const DocumentTable = ({ documents, getStatusClass, currentPage, onGenerateInvoice }) => (
//   <div className="tableContainer">
//     {documents.map((doc, index) => (
//       <div className="rowContainer" key={doc._id}>
//         <div className="cellContainer">
//           <h4>{(currentPage - 1) * 6 + index + 1}</h4> {/* Serial number calculation */}
//         </div>
//         <div className="cellContainer">
//           <h4>{doc.quoteData[0]?.heading}</h4> {/* Accessing `quoteData` instead of `items` */}
//         </div>
//         <div className="cellContainer">
//           <span className={`statusLabel ${getStatusClass(doc.status)}`}>{doc.status}</span>
//         </div>
//         <div className="cellContainer">
//           <Button 
//             type="primary" 
//             onClick={() => onGenerateInvoice(doc)} 
//             disabled={doc.status !== 'verified'} // Disable if not verified
//           >
//             Generate Invoice
//           </Button>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// const VerificationModal = ({ visible, onClose }) => (
//   <Modal
//     title="Congratulations!"
//     visible={visible}
//     onCancel={onClose}
//     footer={null}
//   >
//     <div style={{ textAlign: 'center' }}>
//       <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '48px' }} />
//       <h2>Your document has been verified!</h2>
//     </div>
//   </Modal>
// );

// export default ClientDocumentStatus;
