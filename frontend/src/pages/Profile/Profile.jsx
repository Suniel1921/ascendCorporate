// import React from 'react'
// import "./Profile.css";


// const Profile = () => {
//     return (

//         <div className="Profile-grid">

//             <div className="Profile-card">
//                 <div className='Profile_card_text'>
//                     <h3>
//                         suman 
//                     </h3>
//                     <h5>
//                         developer
//                     </h5>
//                 </div>
//             </div>
//             <div className="Profile-card">
//                 <div className='Profile_card_text'>
//                 <h3>
//                         suman 
//                     </h3>
//                     <h5>
//                         developer
//                     </h5>
//                 </div>
//             </div>
//             <div className="Profile-card">
//                 <div className='Profile_card_text'>
//                 <h3>
//                         suman 
//                     </h3>
//                     <h5>
//                         developer
//                     </h5>
//                 </div>
//             </div>
//             <div className="Profile-card">
//                 <div className='Profile_card_text'>
//                 <h3>
//                         suman 
//                     </h3>
//                     <h5>
//                         developer
//                     </h5>
//                 </div>
//             </div>
//             <div className="Profile-card">
//                 <div className='Profile_card_text'>
//                     <h3>
//                         suman 
//                     </h3>
//                     <h5>
//                         developer
//                     </h5>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Profile






import React from 'react';
import Slider from 'react-slick';
import './Profile.css'; 

const ProfileCard = ({ name, title, imageUrl }) => {
    return (
        <div className="Profile-card">
            <img  src={imageUrl} alt={name} className="Profile-card-image" />
            <div className='Profile_card_text'>
                {/* <h3>{name}</h3> */}
                {/* <h5>{title}</h5> */}
            </div>
        </div>
    );
};

const Profile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,  // Auto-slide enabled
        autoplaySpeed: 2000,  // Time between slides (in ms)
        slidesToShow: 4,  // Show 4 slides at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Profile-grid">
            <Slider {...settings}>
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
                <ProfileCard name="Lorem" title="Devops" imageUrl="/img/Image_2.jpg" />
            </Slider>

            <h3 className='slidingHeading'>Bring them together and you overcome the ordinary.<span className='slidesubHeading'>See what we do</span></h3>
        </div>
    );
};

export default Profile;
