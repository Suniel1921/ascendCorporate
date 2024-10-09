import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import { FaShoppingCart, FaUserAlt, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Badge, Dropdown, Menu, Modal } from 'antd';
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import { useTheme } from '../../contexts/ThemeContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import './navbar.css';
import '../../components/topBanner/banner.css';

const Navbar = () => {
  const [auth, setAuth] = useAuthGlobally();
  const { cart } = useCartGlobally();
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [orderCount, setOrderCount] = useState([]);
  console.log(orderCount)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };



  const handleLogout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logout Successfully');
    window.location.href = '/login';
  };


  const handleNewOrderPopUpClick = () => {
    window.open('/new-order', '_blank', 'width=600, height=800');
  }
  const handleExitingOrderPopUpClick = () => {
    window.open('/existing-order', '_blank', 'width=600, height=800');
  }


  
   // Fetch orders on mount
   useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/order/order-count`); // Replace with your actual API endpoint
        // console.log('leng is ', response)
        setOrderCount(response.data.orderCount); // Set the number of orders
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to fetch orders');
      }
    };

    if (auth?.user) {
      fetchOrders();
    }
  }, [auth]);

  const userMenu = (
    <Menu>
      {auth?.user ? (
        <>
          <Menu.Item key="greeting">
            <h4 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
              Hi <span className="waving-hand ">👋</span> {auth.user.name}
            </h4>
            <hr />
          </Menu.Item>

            {/* Conditionally render Admin Dashboard if user role is 'admin' */}
{/* {auth.user.role === 'admin' && (
  <Menu.Item key="dashboard">
    <NavLink className='dropdownLink_heading' to="/dashboard/admin">Admin Dashboard</NavLink>
  </Menu.Item>
)} */}

{
  orderCount > 0 ? (
    <Menu.Item key="dashboard">
    <NavLink className='dropdownLink_heading' to="/client-dashboard">Client Dashboard</NavLink>
  </Menu.Item>
  ) : (
    <Menu.Item key="dashboard">
    <NavLink onClick={showModal} className='dropdownLink_heading' to="#">Client Dashboard</NavLink>
  </Menu.Item>
  )
}
          <Menu.Item key="update-document">
            <NavLink className='dropdownLink_heading' to="/update-document">Update Document</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <NavLink className='dropdownLink_heading' onClick={handleLogout}>Logout</NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
          <NavLink className='dropdownLink_heading' to="/login">Client Login</NavLink>
        </Menu.Item>
      )}
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="new-order">
        <NavLink onClick={handleNewOrderPopUpClick} className='dropdownLink_heading' to="/">New Order</NavLink>
        {/* <NavLink onClick={handleNewOrderPopUpClick} className='dropdownLink_heading' to="/new-order">New Order</NavLink> */}
      </Menu.Item>
      <Menu.Item key="existing-order">
        <NavLink onClick={handleExitingOrderPopUpClick} className='dropdownLink_heading' to="/">Existing Order</NavLink>
        {/* <NavLink onClick={handleExitingOrderPopUpClick} className='dropdownLink_heading' to="/existing-order">Existing Order</NavLink> */}
      </Menu.Item>
    </Menu>
  );

  const businessMenu = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/Benefits_of_Incorporating">Benefits of Incorporating</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/StartUp_Task">Start Up Tasks</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/Registered_Agent_Service">Registered Agent Service</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className='dropdownLink_heading' to="/Employer_ID_Number">Employer ID Number</NavLink>
      </Menu.Item>
      <Menu.Item key="heading5">
        <NavLink className='dropdownLink_heading' to="/Incorporate_In_Welfare">Incorporate In Welfare</NavLink>
      </Menu.Item>
      <Menu.Item key="heading6">
        <NavLink className='dropdownLink_heading' to="/Limited_Liability_Company">Limited Liability Company</NavLink>
      </Menu.Item>
      <Menu.Item key="heading7">
        <NavLink className='dropdownLink_heading' to="/S_Corporation">S Corporation</NavLink>
      </Menu.Item>
      <Menu.Item key="heading8">
        <NavLink className='dropdownLink_heading' to="/C_Corporation">C Corporation</NavLink>
      </Menu.Item>
      <Menu.Item key="heading9">
        <NavLink className='dropdownLink_heading' to="/None_Profit_Corporation">None Profit Corporation</NavLink>
      </Menu.Item>
      <Menu.Item key="heading10">
        <NavLink className='dropdownLink_heading' to="/Corporation_VS_LLC">Corporation Vs. LLC</NavLink>
      </Menu.Item>
      <Menu.Item key="heading11">
        <NavLink className='dropdownLink_heading' to="/Starting_A_Business">More</NavLink>
      </Menu.Item>
    </Menu>
  );


  const maintainingBusiness = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className="dropdownLink_heading" to="/By_Laws_operating_Agreements">By Laws & operating Agreements</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className="dropdownLink_heading" to="/Business_Lisences">Business Licenses</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className="dropdownLink_heading" to="/Annual_report">Annual Report</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className="dropdownLink_heading" to="/Certificate_of_Good_Standing">Certificate of Good Standing</NavLink>
      </Menu.Item>
      <Menu.Item key="heading5">
        <NavLink className="dropdownLink_heading" to="/Scrop_Election">Scrop Election (From 2553)</NavLink>
      </Menu.Item>
      <Menu.Item key="heading6">
        <NavLink className="dropdownLink_heading" to="/LLC_Tax_Status_Election">LLC Tax Status Election (form 8832)</NavLink>
      </Menu.Item>
      <Menu.Item key="heading7">
        <NavLink className="dropdownLink_heading" to="/NonProfit_501_Status">NonProfit 501 (C) Status</NavLink>
      </Menu.Item>
      <Menu.Item key="heading8">
        <NavLink className="dropdownLink_heading" to="/DBA_Business_Name">DBA/Business Name</NavLink>
      </Menu.Item>
      <Menu.Item key="heading9">
        <NavLink className="dropdownLink_heading" to="/Register_in_Additional_States">Register in Additional States</NavLink>
      </Menu.Item>
      <Menu.Item key="heading10">
        <NavLink className="dropdownLink_heading" to="/Make_a_Payment">Make a Payment</NavLink>
      </Menu.Item>
      <Menu.Item key="heading11">
        <NavLink className="dropdownLink_heading" to="/Maintaining_a_Business">More</NavLink>
      </Menu.Item>
    </Menu>
  );
  const learningCenter = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/StartUp_Task">Start Up Task</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/Corporation_VS_LLC">Corporation Vs. LLC</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/Benefits_of_Incorporating">Benefits of Incorporating</NavLink>
      </Menu.Item>
      <Menu.Item key="heading4">
        <NavLink className='dropdownLink_heading' to="/Incorporation_101">Incorporation 101</NavLink>
      </Menu.Item>
      <Menu.Item key="heading5">
        <NavLink className='dropdownLink_heading' to="/Industry_specific_information">Industry Specific Information</NavLink>
      </Menu.Item>
      <Menu.Item key="heading6">
        <NavLink className='dropdownLink_heading' to="/Tax_filings">Tax filings</NavLink>
      </Menu.Item>
      <Menu.Item key="heading7">
        <NavLink className='dropdownLink_heading' to="/State_guides">State Guides</NavLink>
      </Menu.Item>
      <Menu.Item key="heading8">
        <NavLink className='dropdownLink_heading' to="/Learningcenter">More</NavLink>
      </Menu.Item>
    </Menu>
  );
  const aboutUs = (
    <Menu>
      <Menu.Item key="heading1">
        <NavLink className='dropdownLink_heading' to="/About_Ascend">About Ascend.com</NavLink>
      </Menu.Item>
      <Menu.Item key="heading2">
        <NavLink className='dropdownLink_heading' to="/Corporate_Gurantee">Corporate Compilance Gurantee</NavLink>
      </Menu.Item>
      <Menu.Item key="heading3">
        <NavLink className='dropdownLink_heading' to="/Customer_review">Recent Customer Review</NavLink>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







  return (
    <>
      <div className={`navbar_container ${isSticky ? 'navbar_sticky' : ''}`}>
        <div className='navbarlogo'>
          <NavLink to={'/'}><img src='/img/logo.png' alt="Logo" /></NavLink>
        </div>

        <div>
          <MobileNav />
        </div>
        <div className='items_navbar'>
          <ul>
            <li>
              <Dropdown overlay={businessMenu} trigger={['hover']} placement="bottom">
                <NavLink >Starting a Business</NavLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={maintainingBusiness} trigger={['hover']} placement="bottom">
                <NavLink >Maintaining a Business</NavLink>
              </Dropdown>
            </li>

            <li>
              <Dropdown overlay={learningCenter} trigger={['hover']} placement="bottom">
                <NavLink >Learning Center</NavLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={aboutUs} trigger={['hover']} placement="bottom">
                <NavLink >About us</NavLink>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className='navbar_social'>
          <div className='navbar_social_icon'>
            <a className={`socialContainer containerOne ${isSticky ? 'sticky_icon' : ''}`} href="#">
              <FaInstagram className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
            </a>
            <a className={`socialContainer containerTwo ${isSticky ? 'sticky_icon' : ''}`} href="#">
              <FaTwitter className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
            </a>
            <a className={`socialContainer containerThree ${isSticky ? 'sticky_icon' : ''}`} href="#">
              <FaLinkedin className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
            </a>
            <a className={`socialContainer containerFour ${isSticky ? 'sticky_icon' : ''}`} href="#">
              <FaWhatsapp className={`socialSvg ${isSticky ? 'sticky_icon' : ''}`} />
            </a>
          </div>
        </div>
        <div className="banner">
          <Dropdown overlay={userMenu} placement="bottomRight">
            <NavLink to="#" aria-label="User Menu">
              <FaUserAlt className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={messageMenu} placement="bottomRight">
            <NavLink to="#" aria-label="Message Menu">
              <AiFillMessage className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
            </NavLink>
          </Dropdown>
          <Badge count={cart.length} color="error">
            <NavLink to="/cart" aria-label="Shopping Cart">
              <FaShoppingCart className={`icons ${isSticky ? 'sticky_icon' : ''}`} />
            </NavLink>
          </Badge>
          {/* <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}
        </div>

       {/* Modal for access restriction message */}
       <Modal
       title="Access Denied"
       open={isModalVisible}
       onCancel={() => setIsModalVisible(false)}
       footer={[
         <button
           key="placeOrder"
           style={{
             backgroundColor: '#1890ff', // Change the background color (e.g., blue)
             color: 'white', // Change the text color (white)
             border: 'none',
             padding: '8px 20px',
             borderRadius: '5px',
             cursor: 'pointer',
           }}
           onClick={() => {  
             navigate('/quote-pricing');
             setIsModalVisible(false);
           }}
         >
           Place Order
         </button>
       ]}
     >
       {/* <p>It appears you do not have any active packages associated with your account. To gain access to the Client Dashboard, please consider placing an order. Thank you for your understanding.</p> */}
       <p>Currently, you do not have any active packages, which limits your access to the <strong>Client Dashboard</strong>. We encourage you to explore our offerings and consider placing an order to unlock this feature.</p>
     </Modal>
     
      </div>
      <div className='marginMobile'></div>
    </>
  );
};

export default Navbar;






