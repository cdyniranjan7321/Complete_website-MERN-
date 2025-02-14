import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/ExpertiseCards';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import ExpertiseCards from '../../components/ExpertiseCards';

const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};



const OurExpertises = () => {

  const [experts, setExperts]  = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/expertise.json")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data); // Remove the filter to include all experts
      });
  }, []);
  
  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],


    nextArrow: <simpleNextArrow/>,
    prevArrow: <simplePrevArrow/>
  };

  return (
  <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-36 mb-7 relative">
       <div className='text-left'>
            <p className='subtitle'>OUR EXPERTISE</p>
            <h2 className='title md:w-[520px]'>Barbering Excellence for Every Client</h2>
    </div>



    {/* arrow button */}
    <div className="md:absolute right-3 top-8 mb:10 md:mr-24">
      <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5">
        <FaAngleLeft className="w-8 h-8 p-1"/>
        </button>
      <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-green">
        <FaAngleRight className="h-8 w-8 p-1"/>
        </button>
    </div>
    <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
      {
             experts.map((item, i) =>(
              <ExpertiseCards key={i} item={item}/>
             ))        
      }
       </Slider>
    </div>
  )
}

export default OurExpertises;
