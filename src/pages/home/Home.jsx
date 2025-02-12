import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories';
import SpecialServices from './SpecialServices';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import OurExpertises from './OurExpertise';
import Appointments from './Appointments';


const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <SpecialServices/>
    <Appointments/>
    <OurServices/>
    <OurExpertises/>
    <Testimonials/>
    </div>
  )
}

export default Home;