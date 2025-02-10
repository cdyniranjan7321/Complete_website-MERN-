import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories';

import Appointments from './Appointment';

const Home = () => {
  return (
    <div>
    <Banner/>
    <Categories/>
    <Appointments/>
    </div>
  )
}

export default Home;