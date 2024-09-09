import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Landing from '../pages/Landing';
import LoginBooking from '../pages/LoginBooking';
import DetailsCard from '../pages/DetailsCard';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/begins' element={<Landing/>} />
            <Route index path='/' element={<Home/>} />
            <Route path='/booking' element={<LoginBooking/>} />
            <Route path='/details/:idCard' element={<DetailsCard/>} />
        </Route>

    </Routes>
  )
}

export default AppRouter
