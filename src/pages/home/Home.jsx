import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories';
import SpecialServices from './SpecialServices';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import OurExpertises from './OurExpertise';

const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <SpecialServices/>
    <OurServices/>
    <OurExpertises/>
    <Testimonials/>
    </div>
  )
}

export default Home;