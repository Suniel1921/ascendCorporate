import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from '../../sideMenu/SideMenu';
import '../packages/createPackage.css';
import toast from 'react-hot-toast';

const CreatePackage = () => {
  const [formData, setFormData] = useState({
    heading: '',
    para: '',
  });

  const [contentList, setContentList] = useState([]);
  const [cartHeading, setCartHeading] = useState([]);
  const [cartPrice, setCartPrice] = useState([]);
  const [cartList0, setCartList0] = useState([]);
  const [cartList1, setCartList1] = useState([]);
  const [cartList2, setCartList2] = useState([]);

  // Separate state for input values
  const [newContent, setNewContent] = useState('');
  const [newCartHeading, setNewCartHeading] = useState('');
  const [newCartPrice, setNewCartPrice] = useState('');
  const [newCartList0, setNewCartList0] = useState('');
  const [newCartList1, setNewCartList1] = useState('');
  const [newCartList2, setNewCartList2] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemove = (index, list, setList) => {
    setList(list.filter((item, idx) => idx !== index));
  };

  const renderList = (list, setList) => (
    <ul className="addedList">
      {list.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <button onClick={() => handleRemove(index, list, setList)} className='listDeleteBtn'>Delete</button>
        </li>
      ))}
    </ul>
  );

  const renderListInput = (list, setList, newValue, setNewValue, placeholder) => (
    <div className="fieldContainer">
      <input
        type="text"
        placeholder={placeholder}
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button className='packageBtn' type="button" onClick={() => {
        if (newValue.trim() !== '') {
          setList([...list, newValue]);
          setNewValue('');
        }
      }}>Add</button>
      {renderList(list, setList)}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      heading: formData.heading,
      para: formData.para,
      contentList,
      cartHeading,
      cartPrice: cartPrice.map(item => parseFloat(item)),
      cartList0,
      cartList1,
      cartList2,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/price/createPrice`, payload);
      if (response.data.success) {
        toast.success('Package created successfully');
        // Reset all lists after successful submission
        setContentList([]);
        setCartHeading([]);
        setCartPrice([]);
        setCartList0([]);
        setCartList1([]);
        setCartList2([]);
      } else {
        toast.error('Failed to create package');
      }
    } catch (error) {
      console.error(error);      
      toast.error('Error creating package');
    }
  };

  return (
    <div className="createPackageContainer">
      <div className="adminDashboard">
        <div className="sideMenuContainer"><SideMenu /></div>
        <div className="container">
          <div className="PackageformContainer">
            <h3 style={{marginTop: '23px  '}}>Create Your Package from Here</h3>
            <form className='packageForm' onSubmit={handleSubmit}>
              <input
                type="text"
                name="heading"
                placeholder="Enter heading"
                value={formData.heading}
                onChange={handleChange}
              />
              <input
                type="text"
                name="para"
                placeholder="Enter para"
                value={formData.para}
                onChange={handleChange}
              />
              {renderListInput(contentList, setContentList, newContent, setNewContent, "Enter content")}
              {renderListInput(cartHeading, setCartHeading, newCartHeading, setNewCartHeading, "Enter cart heading")}
              {renderListInput(cartPrice, setCartPrice, newCartPrice, setNewCartPrice, "Enter cart price")}
              {renderListInput(cartList0, setCartList0, newCartList0, setNewCartList0, "Enter cart list 1 item")}
              {renderListInput(cartList1, setCartList1, newCartList1, setNewCartList1, "Enter cart list 2 item")}
              {renderListInput(cartList2, setCartList2, newCartList2, setNewCartList2, "Enter cart list 3 item")}
              <button className='packageSubmitBtn' type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;
