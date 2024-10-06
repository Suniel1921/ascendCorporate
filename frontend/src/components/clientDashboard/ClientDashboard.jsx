import React from 'react'
import ClientSideMenu from './ClientSideMenu'
import ClientChart from './ClientChart'
import '../clientDashboard/clientDashboard.css'

const ClientDashboard = () => {
  return (
    <>
     <>
    <div className="clientDashboard">
      <div className="client_Side_Menu_Container"><ClientSideMenu/></div>
      <div className="client_Chart_Container"><ClientChart/></div>     
    </div>
      
    </>
      
    </>
  )
}

export default ClientDashboard


