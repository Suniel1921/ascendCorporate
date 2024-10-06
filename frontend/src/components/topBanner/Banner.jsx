// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
// import { FaMobileAlt } from "react-icons/fa";
// import { AiFillMessage } from "react-icons/ai";
// import { Badge, Dropdown, Menu } from 'antd';
// import '../topBanner/banner.css';
// import { useAuthGlobally } from '../../contexts/AuthContext';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { useCartGlobally } from '../../contexts/cartContext';

// const Banner = () => {
//   const [auth, setAuth] = useAuthGlobally();
//   const navigate = useNavigate();
//   const { cart } = useCartGlobally();

//   const handleLogout = () => {
//     setAuth({
//       user: null,
//       token: null
//     });
//     localStorage.removeItem('token');
//     axios.defaults.headers.common['Authorization'] = null;
//     toast.success('Logout Successfully');
//     // navigate('/login');
//     window.location.href = '/login';
//   };

//   const userMenu = (
//     <Menu>
//       {auth?.user ? (
//         <>
//           <Menu.Item key="1">
//             <h2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>Hi<span className="waving-hand">👋</span>  {auth.user.name}</h2> <hr /> <br />
//           </Menu.Item>
//           <Menu.Item key="1">
//             <NavLink to="/client-dashboard">Your Dashboard</NavLink>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <NavLink to="/update-document">Update Document</NavLink>
//           </Menu.Item>
//           <Menu.Item key="3">
//             <NavLink onClick={handleLogout}>Logout</NavLink>
//           </Menu.Item>
//         </>
//       ) : (
//         <>
//           <Menu.Item key="1">
//             <NavLink to="/login">Client Login</NavLink>
//           </Menu.Item>
//         </>
//       )}
//     </Menu>
//   );

//   const messageMenu = (
//     <Menu>
//       <Menu.Item key="1">
//         <NavLink to="/new-order">New Order</NavLink>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <NavLink to="/existing-order">Existing Order</NavLink>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="bannerContainer">
//       <div className="container">
//         <div className="banner">
//           <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
//           <div className="bannerLink list">
     
//             <Dropdown menu={userMenu} placement="bottomRight">
//               <NavLink><FaUserAlt className='icons' /></NavLink>
//             </Dropdown>
//             <Dropdown menu={messageMenu} placement="bottomRight">
//               <NavLink><AiFillMessage className='icons' /></NavLink>
//             </Dropdown>
//             <Badge count={cart.length > 0 ? cart.length : 0} color="error">
//               <NavLink to={'/cart'}>
//                 <FaShoppingCart className='icons' />
//               </NavLink>
//             </Badge>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;








import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaMobileAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Badge, Dropdown, Menu } from 'antd';
import { useAuthGlobally } from '../../contexts/AuthContext';
import { useCartGlobally } from '../../contexts/cartContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import '../topBanner/banner.css';

const Banner = () => {
  const [auth, setAuth] = useAuthGlobally();
  const { cart } = useCartGlobally();

  const handleLogout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logout Successfully');
    window.location.href = '/login'; // Redirect to login after logout
  };

  const userMenu = (
    <Menu>
      {auth?.user ? (
        <>
          <Menu.Item key="greeting">
            <h2 style={{ textAlign: 'center', textTransform: 'capitalize' }}>
              Hi <span className="waving-hand">👋</span> {auth.user.name}
            </h2>
            <hr />
          </Menu.Item>
          <Menu.Item key="dashboard">
            <NavLink to="/client-dashboard">Client Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="update-document">
            <NavLink to="/update-document">Update Document</NavLink>
          </Menu.Item>
          <Menu.Item key="logout">
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="login">
          <NavLink to="/login">Client Login</NavLink>
        </Menu.Item>
      )}
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.Item key="new-order">
        <NavLink to="/new-order">New Order</NavLink>
      </Menu.Item>
      <Menu.Item key="existing-order">
        <NavLink to="/existing-order">Existing Order</NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bannerContainer">
      <div className="container">
        <div className="banner">
          <img className='NepalTechlogo' src="/img/nti.png" alt="Nepal Tech Logo" />
          <div className="bannerLink">
            <Dropdown overlay={userMenu} placement="bottomRight">
              <NavLink to="#" aria-label="User Menu">
                <FaUserAlt className='icons' />
              </NavLink>
            </Dropdown>
            <Dropdown overlay={messageMenu} placement="bottomRight">
              <NavLink to="#" aria-label="Message Menu">
                <AiFillMessage className='icons' />
              </NavLink>
            </Dropdown>
            <Badge count={cart.length} color="error">
              <NavLink to="/cart" aria-label="Shopping Cart">
                <FaShoppingCart className='icons' />
              </NavLink>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
