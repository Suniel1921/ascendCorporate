import React from 'react';
import "../Grid/Start_grid.css";
import { FaRegCalendarCheck } from "react-icons/fa6";

const gridItems = [
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "Free Business Startup List",
        description: "Start on track with your startup task.",
        buttonText: "Download Now",
    },
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "Free Business Incorporation Guide",
        description: "A comprehensive guide about corps ans LLCs.",
        buttonText: "Download Now",
    },
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "Free Entity Quick Guide",
        description: "A Quick hit guide about corps, LLCs and other entities.",
        buttonText: "Download Now",
    },
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "10 steps to form a Business",
        description: "An interactive guide",
        buttonText: "View Now",
    },
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "Comparing Business Structures",
        description: " Corporation or LLC? Which fits you best.",
        buttonText: "Get Started",
    },
    {
        icon: <FaRegCalendarCheck className='start_icon_grid' />,
        title: "State Guides",
        description: "State-specific information to decide what's right for your business",
        buttonText: "Get Started",
    },
    // Add more items as needed
];

const Start_grid = () => {
    return (
        <div className="grid-Start-container">
            {gridItems.map((item, index) => (
                <div className="grid-start-item" key={index}>
                    {item.icon}
                    <div className='middle_content_grid'>
                        <h2 className='start_h2'>
                            {item.title}
                        </h2>
                        <p className='grid-startup-paragraph'>
                            {item.description}
                        </p>
                    </div>
                    <h3 className='start_h3'>
                        {item.buttonText}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Start_grid;
