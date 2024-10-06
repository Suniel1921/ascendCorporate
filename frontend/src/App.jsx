//dont forgot to add lazy loading...

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import AdminRoute from './components/admin/adminProtectedRoute/AdminProtectedRoute';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import UserDetails from './components/admin/dashboardMainContent/userDetails/UserDetails';

import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import ClientDashboard from './components/clientDashboard/ClientDashboard';
import QuotePricing from './pages/pricing/QuotePricing';
import Package from './pages/pricing/Package';
import CreatePackage from './components/admin/dashboardMainContent/packages/CreatePackage';
import Cart from './pages/cart/Cart';
import UserContactInfo from './pages/contact/UserContactInfo';
import UserCompanyInfo from './pages/contact/UserCompanyInfo';
import Contact from './pages/contact/Contact';
import Checkout from './pages/cart/Checkout';
import EditInfo from './components/clientDashboard/clientInfo/EditInfo';
import ManageOrders from './components/admin/dashboardMainContent/manageOrders/ManageOrders';
import UploadDocuments from './components/clientDashboard/clientInfo/UploadDocuments';
import About_Ascend from './pages/Navbar_aboutus/About_Ascend.com/About_Ascend';
import Corporate_Gurantee from './pages/Navbar_aboutus/Corporate Compilance Gurantee/Corporate_Gurantee';
import Customer_review from './pages/Navbar_aboutus/Recent Customer Reviews/Customer_review';
import Benefits_of_Incorporating from "./pages/Learning Center Navbar/Benefits of Incorporating/Benefits_of_Incorporating";
import StartUp_Task from "./pages/Learning Center Navbar/Start-up Tasks/StartUp_Task";
import Corporation_VS_LLC from "./pages/Learning Center Navbar/Corporation vs. LLC/Corporation_VS_LLC";
import Incorporation_101 from "./pages/Learning Center Navbar/Incorporation 101/Incorporation_101";
import Business_Glossary from './pages/Learning Center Navbar/Business Glossary/Business_Glossary';

import Industry_specific_information from "./pages/Learning Center Navbar/Industry Specific Information/Industry_specific_information";
import Tax_filings from "./pages/Learning Center Navbar/Tax Filings & Deducations/Tax_filings";
import State_Guides from "./pages/Learning Center Navbar/State Guides/State_Guides";
import Learningcenter from "./pages/Learning Center Navbar/Learning-center/Learningcenter";
import Starting_A_Business from "./pages/Starting Business Navbar/Starting_A_Business/Starting_A_Business";
import Business_Entity_Types from './pages/Starting Business Navbar/Business_Entity_Types/Business_Entity_Types';
import None_Profit_Corporation from "./pages/Starting Business Navbar/None_Profit_Corporation/None_Profit_Corporation";
import C_Corporation from "./pages/Starting Business Navbar/C_Corporation/C_Corporation";
import S_Corporation from "./pages/Starting Business Navbar/S_Corporation/S_Corporation";
import Professional_Corporation from "./pages/Starting Business Navbar/Professional_Corporation/Professional_Corporation";
import Limited_Liability_Company from "./pages/Starting Business Navbar/Limited_Liability_Company/Limited_Liability_Company";
import Incorporate_In_Welfare from "./pages/Starting Business Navbar/Incorporate_In_Welfare/Incorporate_In_Welfare";
import Employer_ID_Number from "./pages/Starting Business Navbar/Employer_ID_Number/Employer_ID_Number";
import Registered_Agent_Service from "./pages/Starting Business Navbar/Registered_Agent_Service/Registered_Agent_Service";
import Name_Reservation from './pages/Starting Business Navbar/Name_Reservation/Name_Reservation';
import Series_LLC from './pages/Starting Business Navbar/Series_LLC/Series_LLC'
import Limited_Partnership from './pages/Starting Business Navbar/Limited_Partnership/Limited_Partnership'


import Scrop_Election from "./pages/Maintaining_A_BUsiness Navbar/Scrop Election (from 2553)/Scrop_Election"
import Annual_report from "./pages/Maintaining_A_BUsiness Navbar/Annual report/Annual_report"
import Business_Lisences from "./pages/Maintaining_A_BUsiness Navbar/Business Lisences/Business_Lisences"
import By_Laws_operating_Agreements from "./pages/Maintaining_A_BUsiness Navbar/By Laws & operating Agreements/By_Laws_operating_Agreements"
import Certificate_of_Good_Standing from "./pages/Maintaining_A_BUsiness Navbar/Certificate of Good Standing/Certificate_of_Good_Standing"
import DBA_Business_Name from "./pages/Maintaining_A_BUsiness Navbar/DBA_Business Name/DBA_Business_Name"
import LLC_Tax_Status_Election from "./pages/Maintaining_A_BUsiness Navbar/LLC Tax Status Election (form 8832)/LLC_Tax_Status_Election"
import Make_a_Payment from "./pages/Maintaining_A_BUsiness Navbar/Make a Payment/Make_a_Payment"
import Maintaining_a_Business from "./pages/Maintaining_A_BUsiness Navbar/More/Maintaining_a_Business"
import NonProfit_501_Status from "./pages/Maintaining_A_BUsiness Navbar/NonProfit 501 (C) Status/NonProfit_501_Status"
import Register_in_Additional_States from "./pages/Maintaining_A_BUsiness Navbar/Register in Additional States/Register_in_Additional_States"
import ComparisionChart from './pages/Learning Center Navbar/Comparision chart/ComparisonChart';
import CSC_Navigator from './pages/Maintaining_A_BUsiness Navbar/CSC Navigator/CSC_Navigator';
import Corporate_and_LLC_Kits from './pages/Maintaining_A_BUsiness Navbar/Corporate and LLC Kits/Corporate_and_LLC_Kits';
import Certified_Copies from './pages/Maintaining_A_BUsiness Navbar/Certified Copies/Certified_Copies';
import Stock_And_Membership from './pages/Maintaining_A_BUsiness Navbar/Stock and Membership Certificates/Stock_And_Membership';
import Written_Constent from './pages/Maintaining_A_BUsiness Navbar/Written Consent/Written_Consent';
import Delaware_E_Filing from './pages/Maintaining_A_BUsiness Navbar/Delaware E-Filing/Delaware_E_Filing';
import Amendments from './pages/Maintaining_A_BUsiness Navbar/Amendments/Amendments';
import Entity_Conversion from './pages/Maintaining_A_BUsiness Navbar/Entity Conversion/Entity_Conversion';
import Dissolution from './pages/Maintaining_A_BUsiness Navbar/Dissolution/Dissolution';
import Reinstatement from './pages/Maintaining_A_BUsiness Navbar/Reinstatement/Reinstatement';
import Mail_Forwarding_Service from './pages/Maintaining_A_BUsiness Navbar/Mail Forwarding Service/Mail_Forwarding_Service';
import How_To_Incorporate from './pages/Learning Center Navbar/How To Incorporate/How_To_Incorporate';
import Protecting_Your_Investment from './pages/Learning Center Navbar/Protecting Your Investment/Protecting_Your_Investment';
import Our_Services from './pages/Learning Center Navbar/Our Services/Our_Services';
import Benefits_of_Delaware_LLC from './pages/Learning Center Navbar/Benefits of Delaware LLC/Benefits_of_Delaware_LLC';
import How_To_Start_a_Franchise_10_Steps from './pages/Learning Center Navbar/How To Start a Franchise 10 steps/How_To_Start_a_Franchise_10_Steps';
import Staying_Compliant from './pages/Learning Center Navbar/Staying Compliant/Staying_Compliant';
import Federal_Requirements from './pages/Learning Center Navbar/Federal Requirements/Federal_Requirements';
import Top_10_Business_Mistakes from './pages/Learning Center Navbar/Top 10 Business Mistakes/Top_10_Business_Mistakes';
import Writing_A_Business_Plan from './pages/Learning Center Navbar/Writing A Business Plan/Writing_A_Business_Plan';
import Business_Compliance_Guide from './pages/Learning Center Navbar/Business Compliance A Guide for Enterpreneurs/Business_Compliance_Guide';
import Steps_to_Form_A_Business from './pages/Learning Center Navbar/10 Steps to Form a Business/10_Steps_to_Form_A_Business';

//downlaod guide info page
import DownloadGuideInfo from './pages/downloadGuide/DownloadGuideInfo';
import ThankYouGuide from './pages/downloadGuide/ThankYouGuide';


//state guides
import Alabama from './pages/Learning Center Navbar/State Guides/By State/Alabama/Alabama';
import Alaska from './pages/Learning Center Navbar/State Guides/By State/Alaska/Alaska';
import Arizona from './pages/Learning Center Navbar/State Guides/By State/Arizona/Arizona';
import Arkansas from './pages/Learning Center Navbar/State Guides/By State/Arkansas/Arkansas';
import California from './pages/Learning Center Navbar/State Guides/By State/California/California';
import Colorado from './pages/Learning Center Navbar/State Guides/By State/Colorado/Colorado';
import Connecticut from './pages/Learning Center Navbar/State Guides/By State/Connecticut/Connecticut';
import Delaware from './pages/Learning Center Navbar/State Guides/By State/Delaware/Delaware';
import District_of_Columbia from './pages/Learning Center Navbar/State Guides/By State/District of Columbia/District_of_Columbia';
import Florida from './pages/Learning Center Navbar/State Guides/By State/Florida/Florida';
import Georgia from './pages/Learning Center Navbar/State Guides/By State/Georgia/Georgia';
import Hawaii from './pages/Learning Center Navbar/State Guides/By State/Hawaii/Hawaii';
import Idaho from './pages/Learning Center Navbar/State Guides/By State/Idaho/Idaho';
import Illinois from './pages/Learning Center Navbar/State Guides/By State/Illinois/Illinois';
import Indiana from './pages/Learning Center Navbar/State Guides/By State/Indiana/Indiana';
import Iowa from './pages/Learning Center Navbar/State Guides/By State/Iowa/Iowa';
import Kansas from './pages/Learning Center Navbar/State Guides/By State/Kansas/Kansas';
import Kentucky from './pages/Learning Center Navbar/State Guides/By State/Kentucky/Kentucky';
import Louisiana from './pages/Learning Center Navbar/State Guides/By State/Louisiana/Louisiana';
import Maine from './pages/Learning Center Navbar/State Guides/By State/Maine/Maine';
import Maryland from './pages/Learning Center Navbar/State Guides/By State/Maryland/Maryland';
import Massachusetts from './pages/Learning Center Navbar/State Guides/By State/Massachusetts/Massachusetts';
import Michigan from './pages/Learning Center Navbar/State Guides/By State/Michigan/Michigan';
import Minnesota from './pages/Learning Center Navbar/State Guides/By State/Minnesota/Minnesota';
import Mississippi from './pages/Learning Center Navbar/State Guides/By State/Mississippi/Mississippi';
import Missouri from './pages/Learning Center Navbar/State Guides/By State/Missouri/Missouri';
import Montana from './pages/Learning Center Navbar/State Guides/By State/Montana/Montana';
import Nebraska from './pages/Learning Center Navbar/State Guides/By State/Nebraska/Nebraska';
import Nevada from './pages/Learning Center Navbar/State Guides/By State/Nevada/Nevada';

import UserDocuments from './components/admin/dashboardMainContent/userDetails/UserDocuments';

import New_Hampshire from './pages/Learning Center Navbar/State Guides/By State/New Hampshire/New_Hampshire';
import New_Jersey from './pages/Learning Center Navbar/State Guides/By State/New Jersey/New_Jersey';
import New_Mexico from './pages/Learning Center Navbar/State Guides/By State/New Mexico/New_Mexico';
import New_York from './pages/Learning Center Navbar/State Guides/By State/New York/New_York';
import North_Carolina from './pages/Learning Center Navbar/State Guides/By State/North Carolina/North_Carolina';
import North_Dakota from './pages/Learning Center Navbar/State Guides/By State/North Dakota/North_Dakota';
import Ohio from './pages/Learning Center Navbar/State Guides/By State/Ohio/Ohio';
import Oklahoma from './pages/Learning Center Navbar/State Guides/By State/Oklahoma/Oklahoma';
import Oregon from './pages/Learning Center Navbar/State Guides/By State/Oregon/Oregon';
import Pennsylvania from './pages/Learning Center Navbar/State Guides/By State/Pennsylvania/Pennsylvania';
import Rhode_Island from './pages/Learning Center Navbar/State Guides/By State/Rhode Island/Rhode_Island';
import South_Carolina from './pages/Learning Center Navbar/State Guides/By State/South Carolina/South_Carolina';
import South_Dakota from './pages/Learning Center Navbar/State Guides/By State/South Dakota/South_Dakota';
import Tennessee from './pages/Learning Center Navbar/State Guides/By State/Tennessee/Tennessee';
import Texas from './pages/Learning Center Navbar/State Guides/By State/Texas/Texas';
import Utah from './pages/Learning Center Navbar/State Guides/By State/Utah/Utah';
import Vermont from './pages/Learning Center Navbar/State Guides/By State/Vermont/Vermont';
import Virginia from './pages/Learning Center Navbar/State Guides/By State/Virginia/Virginia';
import Washington from './pages/Learning Center Navbar/State Guides/By State/Washington/Washington';
import West_Virginia from './pages/Learning Center Navbar/State Guides/By State/West Virginia/West_Virginia';
import Wisconsin from './pages/Learning Center Navbar/State Guides/By State/Wisconsin/Wisconsin';
import Wyoming from './pages/Learning Center Navbar/State Guides/By State/Wyoming/Wyoming';



const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/quote-pricing' element={<QuotePricing />} />
              <Route path='/package-selection/:id' element={<Package />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/new-order' element={<Contact />} />
              <Route path='/existing-order' element={<Contact />} />
              <Route path='/contact-info' element={<UserContactInfo />} />
              <Route path='/company-info' element={<UserCompanyInfo />} />
              <Route path='/checkout' element={<Checkout />} />

              {/* Suman */}
              <Route path='/About_Ascend' element={<About_Ascend />} />
              <Route path='/Corporate_Gurantee' element={<Corporate_Gurantee />} />
              <Route path='/Customer_review' element={<Customer_review />} />

              {/* Learning Center */}
              <Route path='/StartUp_Task' element={<StartUp_Task />} />
              <Route path='/Corporation_VS_LLC' element={<Corporation_VS_LLC />} />
              <Route path='/Benefits_of_Incorporating' element={<Benefits_of_Incorporating />} />
              <Route path='/Incorporation_101' element={<Incorporation_101 />} />
              <Route path='/Industry_specific_information' element={<Industry_specific_information />} />
              <Route path='/Tax_filings' element={<Tax_filings />} />
              <Route path='/Learningcenter' element={<Learningcenter />} />
              <Route path='/Business_Comparision_Chart' element={< ComparisionChart/>} />
              <Route path='/How_To_Incorporate' element={< How_To_Incorporate/>} />
              <Route path='/Business_Glossary' element={< Business_Glossary/>} />
              <Route path='/Protecting_Your_Investment' element={<Protecting_Your_Investment />} />
              <Route path='/Our_Services' element={<Our_Services />} />
              <Route path='/Benefits_of_Delaware_LLC' element={<Benefits_of_Delaware_LLC />} />
              <Route path='/How_To_Start_a_Franchise_10_Steps' element={<How_To_Start_a_Franchise_10_Steps />} />
              <Route path='/Staying_Compliant' element={<Staying_Compliant />} />
              <Route path='/Federal_Requirements' element={<Federal_Requirements />} />
              <Route path='/Top_10_Business_Mistakes' element={<Top_10_Business_Mistakes />} />
              <Route path='/Writing_A_Business_Plan' element={<Writing_A_Business_Plan />} />
              <Route path='/Business_Compliance_Guide' element={<Business_Compliance_Guide />} />
              <Route path='/10_Steps_to_Form_A_Business' element={<Steps_to_Form_A_Business />} />
              <Route path='/State_Guides' element={<State_Guides />} />


              {/* State Guides */}
              <Route path='/Learning_Center/Alabama' element={<Alabama />} />
              <Route path='/Learning_Center/Alaska' element={<Alaska />} />
              <Route path='/Learning_Center/Arkansas' element={<Arkansas />} />
              <Route path='/Learning_Center/Arizona' element={<Arizona />} />
              <Route path='/Learning_Center/California' element={<California />} />
              <Route path='/Learning_Center/Colorado' element={<Colorado />} />
              <Route path='/Learning_Center/Connecticut' element={<Connecticut />} />
              <Route path='/Learning_Center/Delaware' element={<Delaware />} />
              <Route path='/Learning_Center/District_of_Columbia' element={<District_of_Columbia />} />
              <Route path='/Learning_Center/Florida' element={<Florida />} />
              <Route path='/Learning_Center/Georgia' element={<Georgia />} />
              <Route path='/Learning_Center/Hawaii' element={<Hawaii />} />
              <Route path='/Learning_Center/Idaho' element={<Idaho />} />
              <Route path='/Learning_Center/Illinois' element={<Illinois />} />
              <Route path='/Learning_Center/Indiana' element={<Indiana />} />
              <Route path='/Learning_Center/Iowa' element={<Iowa />} />
              <Route path='/Learning_Center/Kansas' element={<Kansas />} />
              <Route path='/Learning_Center/Kentucky' element={<Kentucky />} />
              <Route path='/Learning_Center/Louisiana' element={<Louisiana />} />
              <Route path='/Learning_Center/Maine' element={<Maine />} />
              <Route path='/Learning_Center/Maryland' element={<Maryland />} />
              <Route path='/Learning_Center/Massachusetts' element={<Massachusetts />} />
              <Route path='/Learning_Center/Michigan' element={<Michigan />} />
              <Route path='/Learning_Center/Minnesota' element={<Minnesota />} />
              <Route path='/Learning_Center/Mississippi' element={<Mississippi />} />
              <Route path='/Learning_Center/Missouri' element={<Missouri />} />
              <Route path='/Learning_Center/Montana' element={<Montana />} />
              <Route path='/Learning_Center/Nebraska' element={<Nebraska />} />
              <Route path='/Learning_Center/Nevada' element={<Nevada />} />
              <Route path='/Learning_Center/New_Hampshire' element={<New_Hampshire />} />
              <Route path='/Learning_Center/New_Jersey' element={<New_Jersey />} />
              <Route path='/Learning_Center/New_Mexico' element={<New_Mexico />} />
              <Route path='/Learning_Center/New_York' element={<New_York />} />
              <Route path='/Learning_Center/North_Carolina' element={<North_Carolina />} />
              <Route path='/Learning_Center/North_Dakota' element={<North_Dakota />} />
              <Route path='/Learning_Center/Ohio' element={<Ohio />} />
              <Route path='/Learning_Center/Oklahoma' element={<Oklahoma />} />
              <Route path='/Learning_Center/Oregon' element={<Oregon />} />
              <Route path='/Learning_Center/Pennsylvania' element={<Pennsylvania />} />
              <Route path='/Learning_Center/Rhode_Island' element={<Rhode_Island />} />
              <Route path='/Learning_Center/South_Carolina' element={<South_Carolina />} />
              <Route path='/Learning_Center/South_Dakota' element={<South_Dakota />} />
              <Route path='/Learning_Center/Tennessee' element={<Tennessee />} />
              <Route path='/Learning_Center/Texas' element={<Texas />} />
              <Route path='/Learning_Center/Utah' element={<Utah />} />
              <Route path='/Learning_Center/Vermont' element={<Vermont />} />
              <Route path='/Learning_Center/Virginia' element={<Virginia />} />
              <Route path='/Learning_Center/Washington' element={<Washington />} />
              <Route path='/Learning_Center/West_Virginia' element={<West_Virginia />} />
              <Route path='/Learning_Center/Wisconsin' element={<Wisconsin />} />
              <Route path='/Learning_Center/Wyoming' element={<Wyoming />} />


              {/* starting a business navbar */}
              <Route path='/Business_Entity_Types' element={<Business_Entity_Types />} />
              <Route path='/Registered_Agent_Service' element={ <Registered_Agent_Service/> } />
              <Route path='/Employer_ID_Number' element={ <Employer_ID_Number/> } />
              <Route path='/Incorporate_In_Welfare' element={ <Incorporate_In_Welfare/> } />
              <Route path='/Limited_Liability_Company' element={ <Limited_Liability_Company/> } />
              <Route path='/S_Corporation' element={ <S_Corporation/> } />
              <Route path='/C_Corporation' element={ <C_Corporation/> } />
              <Route path='/None_Profit_Corporation' element={ <None_Profit_Corporation/> } />
              <Route path='/Professional_Corporation' element={ <Professional_Corporation/> } />
              <Route path='/Series_LLC' element={ <Series_LLC />} />
              <Route path='/Limited_Partnership' element={<Limited_Partnership />} />
              <Route path='/Starting_A_Business' element={ <Starting_A_Business/> } />
              <Route path='/Name_Reservation' element={ <Name_Reservation/>} />
              <Route path='/Business_Licenses' element={<Business_Lisences />}/>



              {/* Maintaining a business navbar */}
              <Route path='/Scrop_Election' element={ <Scrop_Election/> } />
              <Route path='/Annual_report' element={ <Annual_report/> } />
              <Route path='/Business_Lisences' element={ <Business_Lisences/> } />
              <Route path='/By_Laws_operating_Agreements' element={ <By_Laws_operating_Agreements/> } />
              <Route path='/Certificate_of_Good_Standing' element={ <Certificate_of_Good_Standing/> } />
              <Route path='/DBA_Business_Name' element={ <DBA_Business_Name/> } />
              <Route path='/LLC_Tax_Status_Election' element={ <LLC_Tax_Status_Election/> } />
              <Route path='/Make_a_Payment' element={ <Make_a_Payment/> } />
              <Route path='/Maintaining_a_Business' element={ <Maintaining_a_Business/> } />
              <Route path='/NonProfit_501_Status' element={ <NonProfit_501_Status/> } />
              <Route path='/Register_in_Additional_States' element={ <Register_in_Additional_States/> } />
              <Route path='/CSC_Navigator' element={<CSC_Navigator />} />
              <Route path='/Corporate_and_LLC_Kits' element={<Corporate_and_LLC_Kits />} />
              <Route path='/Certified_Copies' element={<Certified_Copies />}/>
              <Route path='/Stock_And_Membership' element={<Stock_And_Membership />}/>
              <Route path='/Written_Consent' element={< Written_Constent/>} />
              <Route path='/Scrop_Election' element={<Scrop_Election />} />
              <Route path='/Delaware_E_Filing' element={<Delaware_E_Filing />} />
              <Route path='/Amendments' element={<Amendments />} />
              <Route path='/Entity_Conversion' element={<Entity_Conversion />} />
              <Route path='/Dissolution' element={<Dissolution />} />
              <Route path='/Reinstatement' element={<Reinstatement />} />
              <Route path='/Mail_Forwarding_Service' element={<Mail_Forwarding_Service />} />

            {/* Download guide */}
              <Route path= '/download-guide-info' element={<DownloadGuideInfo/>} />
              <Route path= '/thank-you-guide' element={<ThankYouGuide/>} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path='/client-dashboard' element={<ClientDashboard />} />
                <Route path='/edit-info' element={<EditInfo />} />
                <Route path='/upload-documents' element={<UploadDocuments />} />
              </Route>

              {/* Admin Protected Routes */}
              <Route path='/dashboard' element={<AdminRoute />}>
                <Route path='admin' element={<AdminDashboard />} />
                <Route path='admin/createPackage' element={<CreatePackage />} />
                <Route path='admin/manage-orders' element={<ManageOrders />} />
                <Route path='admin/user-details' element={<UserDetails/>} />
                <Route path='admin/user-documents' element={<UserDocuments/>} />
              </Route>

            </Route>
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
};

export default App;

