import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { NavLink } from 'react-router-dom';

import './MobileNav.css';

import { IoMenu } from "react-icons/io5";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
        <div className='navbarlogo'>
          <NavLink to={'/'}><img src='/img/logo.png' alt="Logo" /></NavLink>
        </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Starting a Business
        </AccordionSummary>
        <AccordionDetails>
        <NavLink className='dropdownLink_heading' to="/Benefits_of_Incorporating" onClick={toggleDrawer(false)}>Benefits of Incorporating</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/StartUp_Task" onClick={toggleDrawer(false)}>Start Up Tasks</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Registered_Agent_Service" onClick={toggleDrawer(false)}>Registered Agent Service</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Employer_ID_Number" onClick={toggleDrawer(false)}>Employer ID Number</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Incorporate_In_Welfare" onClick={toggleDrawer(false)}>Incorporate In Welfare</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Limited_Liability_Company" onClick={toggleDrawer(false)}>Limited Liability Company</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/S_Corporation" onClick={toggleDrawer(false)}>S Corporation</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/C_Corporation" onClick={toggleDrawer(false)}>C Corporation</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/None_Profit_Corporation" onClick={toggleDrawer(false)}>None Profit Corporation</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Corporation_VS_LLC" onClick={toggleDrawer(false)}>Corporation Vs. LLC</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Starting_A_Business" onClick={toggleDrawer(false)}>More</NavLink>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Maintaining a Business
        </AccordionSummary>
        <AccordionDetails>
        <NavLink className="dropdownLink_heading" to="/By_Laws_operating_Agreements" onClick={toggleDrawer(false)}>By Laws & operating Agreements</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Business_Lisences" onClick={toggleDrawer(false)}>Business Licenses</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Annual_report" onClick={toggleDrawer(false)}>Annual Report</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Certificate_of_Good_Standing" onClick={toggleDrawer(false)}>Certificate of Good Standing</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Scrop_Election" onClick={toggleDrawer(false)}>Scrop Election (From 2553)</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/LLC_Tax_Status_Election" onClick={toggleDrawer(false)}>LLC Tax Status Election (form 8832)</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/NonProfit_501_Status" onClick={toggleDrawer(false)}>NonProfit 501 (C) Status</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/DBA_Business_Name" onClick={toggleDrawer(false)}>DBA/Business Name</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Register_in_Additional_States" onClick={toggleDrawer(false)}>Register in Additional States</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Make_a_Payment" onClick={toggleDrawer(false)}>Make a Payment</NavLink>
        <br />
        <NavLink className="dropdownLink_heading" to="/Maintaining_a_Business" onClick={toggleDrawer(false)}>More</NavLink>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Learning Center
        </AccordionSummary>
        <AccordionDetails>
        <NavLink className='dropdownLink_heading' to="/StartUp_Task" onClick={toggleDrawer(false)}>Start Up Task</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Corporation_VS_LLC" onClick={toggleDrawer(false)}>Corporation Vs. LLC</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Benefits_of_Incorporating" onClick={toggleDrawer(false)}>Benefits of Incorporating</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Incorporation_101" onClick={toggleDrawer(false)}>Incorporation 101</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Industry_specific_information" onClick={toggleDrawer(false)}>Industry Specific Information</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Tax_filings" onClick={toggleDrawer(false)}>Tax filings</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/State_guides" onClick={toggleDrawer(false)}>State Guides</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Learningcenter" onClick={toggleDrawer(false)}>More</NavLink>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          About Us
        </AccordionSummary>
        <AccordionDetails>
        <NavLink className='dropdownLink_heading' to="/About_Ascend" onClick={toggleDrawer(false)}>About Ascend.com</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Corporate_Gurantee" onClick={toggleDrawer(false)}>Corporate Compilance Gurantee</NavLink>
        <br />
        <NavLink className='dropdownLink_heading' to="/Customer_review" onClick={toggleDrawer(false)}>Recent Customer Review</NavLink>
        <br />
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <div>
      <IoMenu onClick={toggleDrawer(true)} className='menu-icon'/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
