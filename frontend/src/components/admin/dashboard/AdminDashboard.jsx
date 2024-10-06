import React from 'react'
import '../dashboard/adminDashboard.css'
import SideMenu from '../sideMenu/SideMenu';
import AdminChart from '../dashboardMainContent/adminChart/AdminChart';


const AdminDashboard = () => {
  return (
    <>
    <div className="adminDashboard">
      <div className="sideMenuContainer"><SideMenu/></div>
      <div className="adminChartContainer"><AdminChart/></div>
     
    </div>
      
    </>
  )
}

export default AdminDashboard
