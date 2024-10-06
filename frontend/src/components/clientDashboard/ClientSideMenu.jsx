import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../clientDashboard/clientSideMenu.css';
import {useAuthGlobally} from '../../contexts/AuthContext';

const ClientSideMenu = () => {
 const [auth, setAuth] = useAuthGlobally();
  
  const [dropdowns, setDropdowns] = useState({
    ecommerce: false,
    category: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prevState) => {
      const newState = { ecommerce: false, category: false };
      newState[name] = !prevState[name];
      return newState;
    });
  };

  return (
    <>
      <div className="sideMenu">
        {/* <Link className='link' to={'/dashboard/admin'}><h3>Dashboard</h3></Link> */}

        <div className="clientDataContainer">
          <img className='clientImg' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1722753642~exp=1722757242~hmac=4fe2973764b69c9412056b03c5204957c9abfb3dc062f259dfa5cb07afed926d&w=740" alt="" />
          {/* <img className='clientImg' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /> */}
          <h4 style={{textTransform: 'capitalize' }}>Hi<span className="waving-hand">👋</span>  {auth.user.name}</h4> 
          <p>{auth?.user?.email}</p>
          <hr /> <br />
        </div>

        <div className="dropdownContainer">
          <h3 onClick={() => toggleDropdown('ecommerce')}>
            <IoMdArrowDropright className={`icon ${dropdowns.ecommerce ? 'rotate' : ''}`} />
            <span className="dropdownTitle">Dashboard</span>
          </h3>
          <div className={`dropdownContent ${dropdowns.ecommerce ? 'open' : ''}`}>

          <Link className='link' to={'/client-dashboard'}> 
            <p><IoMdArrowDropright className="subItemIcon" />Home</p>
            </Link>


            <Link className='link' to={'/edit-info'}> 
            <p><IoMdArrowDropright className="subItemIcon" />Edit Info</p>
            </Link>
           
           
            {/* <p><IoMdArrowDropright className="subItemIcon" /> Password</p> */}
            <p><IoMdArrowDropright className="subItemIcon" /> Address Book</p>
          </div>
        </div>

        <div className="dropdownContainer">
          <h3 onClick={() => toggleDropdown('category')}>
            <IoMdArrowDropright className={`icon ${dropdowns.category ? 'rotate' : ''}`} />
            <span className="dropdownTitle">Orders</span>
          </h3>
          <div className={`dropdownContent ${dropdowns.category ? 'open' : ''}`}>
            <Link className='link' to='/dashboard/admin/createCategory'>
              <p className="subItemLink"><IoMdArrowDropright className="subItemIcon" />Order History</p>
            </Link>
            <Link className='link' to='/dashboard/admin/createBrand'>
              <p className="subItemLink">
                <IoMdArrowDropright className="subItemIcon" /> Download
              </p>
            </Link>
            <Link className='link' to='/upload-documents'>
            <p><IoMdArrowDropright className="subItemIcon" />Documents</p>
            </Link>
            <Link className='link' to='/dashboard/admin/createBrand'>
            <p><IoMdArrowDropright className="subItemIcon" />Payments</p>
            </Link>
            <Link className='link' to='/dashboard/admin/createBrand'>
            <p><IoMdArrowDropright className="subItemIcon" />Progress</p>
            </Link>
          

          </div>
        </div>
        {/* <button className='signoutBtn'>Sign Out</button> */}
      </div>
    </>
  );
};

export default ClientSideMenu;
