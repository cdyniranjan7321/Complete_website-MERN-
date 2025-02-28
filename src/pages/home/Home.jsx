import React from 'react';
import Banner from '../../components/Banner';
import Categories from './Categories';
import SpecialServices from './SpecialServices';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import Appointments from './Appointments';


const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <SpecialServices/>
    <Appointments/>
    <OurServices/>
    <Testimonials/>
    </div>
  )
}

export default Home;