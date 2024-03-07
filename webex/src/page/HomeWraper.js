import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu'
import BottomMenu from '../components/BottomMenu/BottomMenu'
import Footer from '../components/Footer/Footer'
import ScrollUpButton from '../components/ScrollUpButton/ScrollUpButton'
import NavTop from '../components/NavTop/NavTop'
import { useSelector } from 'react-redux'
import { selectLogin } from '../store/slices/LoginSlice/LoginSlice'
import NavBarForUser from '../components/NavBarForUser/NavBarForUser'
import { getIsAuth } from '../store/slices/Auth/AuthSlice'

function HomeWraper() {
  const isAuth = useSelector(getIsAuth)
  return (
    <div>
      <BurgerMenu/>
      {!isAuth && (<NavTop/>)}
      {!isAuth ? <NavBar/> : <NavBarForUser/>} 
      <Outlet/>
      <ScrollUpButton/>
      <Footer/>
      <BottomMenu/>
    </div>
  )
}

export default HomeWraper