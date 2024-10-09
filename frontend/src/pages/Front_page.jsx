import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./front-page.css";
import { TbReportAnalytics } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Let_start from "./Let_start";
import About_us from "./about_us box/About_us";
import Process_box from "./process_box/Process_box";
import Pricing_box from "./process_box/Pricing_box";
import FixedBackground from "./fixedBcakground/FixedBackground";
import Blog from "./Blog/Blog";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Testimonials from "./Testimonials/Testimonials";
import Pricing_main from "./prcing_main/Pricing_main";
import Banner from "./Banner/Banner";
import Profile from "./Profile/Profile";
// import Banner2 from './pages/Banner copy/Banner2';
import imge from "/img/12.png";
import Footer from "./footer/Footer";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import BusinessIcon from "@mui/icons-material/Business";
import RoomIcon from "@mui/icons-material/Room";
import { useNavigate } from "react-router-dom";


const Front_page = () => {
  const navigate = useNavigate();
  // const handleServiceClick = (path) => {
  //   navigate(path);
  // };
  

  return (
    <>
      <Banner />
      <div className="service_container">
        <div className="service_left" id="service_left">
          <div className="serviceBG">
            <span className="redDot"></span>
            <p className="service">SERVICES</p>
          </div>

          <div className="service_heading">
            We provide the best
            <br /> solutions for your growth.
          </div>
        </div>
        <div className="service_right">
          <p className="service_paragraph">
            A business consultant is a professional who provides expert advice
            and guidance to businesses and organizations to help them improve
            their performance, solve problems, and achieve their goals.
          </p>
          <div id="unique-hover-button">
            <div id="unique-hover-button__div">
              <span>
                <p>READ ABOUT US</p>
              </span>
            </div>
            <div id="unique-hover-button__div">
              <span onClick={() => navigate("/About_Ascend")}>
                <p>READ ABOUT US</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-box">
        <div className="single-service-box" onClick={() => navigate("/Registered_in_additional_states")}>
          <BusinessIcon className="single-icon" />

          <h3 className="single-box-header">Register in Additional States</h3>
          <p className="single-box-paragraph">
            In order to do business legally in states other than your home
            state, you may need to register (also referred to as qualifying)
            your company in those states.
          </p>
          <div className="read-more">
            <FaArrowRight className="arrow_icon" />
            <span className="text">Read More</span>
          </div>
        </div>

        <div className="single-service-box" onClick={() => navigate("/State_guides")}>
          <RoomIcon className="single-icon" />

          <h3 className="single-box-header">Find a State</h3>
          <p className="single-box-paragraph">
            Find the right state to incorporate your company. CSC offers
            incorporation services in all 50 states and the District of
            Columbia.
          </p>
          <div className="read-more">
            <FaArrowRight className="arrow_icon" />
            <span className="text">Read More</span>
          </div>
        </div>

        <div className="single-service-box" onClick={() => navigate("/Registered_Agent_Service")}>
          <AssignmentTurnedInIcon className="single-icon" />

          <h3 className="single-box-header">Stay on Track</h3>
          <p className="single-box-paragraph">
            Once incorporated, make sure your business stays in compliance. Our
            Registered Agent service monitors your company’s status and ensures
            that you meet critical, time-sensitive deadlines.We always provide
            people a complete solution focused of any business.
          </p>
          <div className="read-more">
            <FaArrowRight className="arrow_icon" />
            <span className="text">Read More</span>
          </div>
        </div>

        {/* <div className="single-service-box">
                    <TbReportAnalytics className="single-icon" />

                    <h3 className="single-box-header">Data collection</h3>
                    <p className="single-box-paragraph">
                        We always provide people a complete solution focused of any
                        business.
                    </p>
                    <div className="read-more">
                        <FaArrowRight className="arrow_icon" />
                        <span className="text">Read More</span>
                    </div>
                </div> */}
      </div>

      <div className="service-bottom">
        Bring them together and you overcome the ordinary.
        <span className="service-bottom-highlight">
          See what we do
          <img src={imge} alt="Cover Image" class="cover-image" />
        </span>
      </div>

      <Let_start />
      <About_us />
      <Process_box />
      <Pricing_main />
      <Banner />
      <Profile />

      {/* <Banner2/> */}
      <Pricing_box />
      <FixedBackground />
      {/* <Blog /> */}
      <FeedbackForm />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default Front_page;
