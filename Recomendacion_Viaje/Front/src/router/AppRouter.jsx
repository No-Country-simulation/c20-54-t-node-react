import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Landing from '../pages/Landing';
import LoginBooking from '../pages/LoginBooking';
import Booking from '../pages/Booking';
import DetailsCard from '../pages/DetailsCard';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/begins' element={<Landing/>} />
            <Route index path='/' element={<Home/>} />
            <Route path='/login' element={<LoginBooking/>} />
            <Route path='/booking' element={<Booking/>} />
            <Route path='/details/:idCard' element={<DetailsCard/>} />
        </Route>
    </Routes>
  )
}

export default AppRouter
