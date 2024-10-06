import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Arrow = (props) => {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={`${className} custom-arrow ${direction === 'left' ? 'custom-prev' : 'custom-next'}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {direction === 'left' ? '<' : '>'}
    </div>
  );
};

const Testimonials = () => {
  const cards = [
    {
      imgSrc: "/img/rating.png",
      heading: 'Wonderful Experience',
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
    },
    {
      imgSrc: "/img/rating.png",
      heading: 'Wonderful Experience',
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "ALPER KAMU",
      role: "UI Developer",
    },
    {
      imgSrc: "/img/rating.png",
      heading: 'Wonderful Experience',
      text: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      name: "HENRY LETHAM",
      role: "CTO",
    }
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section>
      <div className="container-testimonial-custom">
        <div className="testimonials-container-custom">
          <div className='testimonials-button-custom'>
            TESTIMONIALS
          </div>
          <h2 className="testimonials-title-custom">
            Hear from our clients.
          </h2>
          <p className="testimonials-description-custom">
            We have three projects with this template and that is because we love the design, the large number of possibilities.
          </p>
        </div>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div className="card-custom" key={index}>
              <div className="text-center-custom">
                <img
                  alt="testimonial"
                  className="rating"
                  src={card.imgSrc}
                />
                <h3 className='testimonial_Heading'>{card.heading}</h3>
                <p className="leading-relaxed-custom">
                  {card.text}
                </p>
                <span className="divider-custom"></span>
                <h2 className="title-font-custom">{card.name}</h2>
                <p className="role-custom">{card.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
