import React, { useEffect, useState } from 'react';
import ClientSideMenu from '../ClientSideMenu';
import '../clientInfo/editInfo.css';
import toast from 'react-hot-toast';
import axios from 'axios';

const EditInfo = () => {
    const [userCompanyInfo, setUserCompanyInfo] = useState([]);
    const [loading, setLoading] = useState(true); // Added for loading state
    const [error, setError] = useState(null); // Added for error state

    const getAllUserCompanyInfo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/contact/getAllCompanyInfo`);
            console.log('API Response:', response);

            if (response.data.success) {
                setUserCompanyInfo(response.data.companyInfo);
            } else {
                toast.error('No data found');
            }
        } catch (error) {
            console.error('API Error:', error); // Added for better error logging
            if (error.response) {
                toast.error(error.response.data.message || 'Something went wrong');
            } else {
                toast.error('Something went wrong');
            }
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUserCompanyInfo();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="editInfoContainer">
            <div className="adminDashboard">
                <div className="sideMenuContainer">
                    <ClientSideMenu />
                </div>
                <div className="container">
                    <div className="editInfo">
                        <h3 className='userDashboardHeading'>Company Information</h3>
                        {userCompanyInfo.length === 0 ? (
                            <p>No company information available.</p>
                        ) : (
                            <table className="companyInfoTable">
                                <thead>
                                    <tr>
                                        <th>Preferred Name</th>
                                        <th>Alternate Name</th>
                                        <th>Industry</th>
                                        <th>Description</th>
                                        <th>Business Email</th>
                                        <th>Business Phone</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userCompanyInfo.map((info) => (
                                        <tr key={info._id}>
                                            <td>{info.preferredName}</td>
                                            <td>{info.alternateName}</td>
                                            <td>{info.industry}</td>
                                            <td>{info.businessDescription}</td>
                                            <td>{info.businessEmail}</td>
                                            <td>{info.businessPhone}</td>
                                            <td>{`${info.address.street}, ${info.address.city}, ${info.address.state}, ${info.address.postalcode}`}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditInfo;
