import React from 'react'
import About from '../Components/About/About'
import Appointment from '../Components/Appointment/Appointment'
import AppointmentExtra from '../Components/Appointment/AppointmentExtra'
import Banner from '../Components/Banner/Banner'
import Doctors from '../Components/Doctors/Doctors'
import Latestnews from '../Components/LatestNews/Latestnews'

const Home = () => {
  return (
   <>
    <Banner/>
    <About/>
    <Doctors/>
    <Latestnews/>
    <Appointment/>
    <AppointmentExtra/>
   </>
  )
}

export default Home
