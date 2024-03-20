import React, { useEffect, useRef, useState } from 'react'
import './BurgerMenu.css'
import { RegistreIcon, burger, closeBurgerIcon, lengIcon, loginIcon } from '../../iconFolder/icon'
import { defaultAvatar, logoImage, projectImg_1 } from '../../images/images'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import Button from '../Button/Button'
import SelectLng from '../SelectLng/SelectLng'
import RegistreButton from '../RegistreButton/RegistreButton'
import LoginButton from '../LoginButton/LoginButton'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLogin } from '../../store/slices/LoginSlice/LoginSlice'
import { getAuthUser, getIsAuth } from '../../store/slices/Auth/AuthSlice'

function BurgerMenu() {

  const leng = localStorage.getItem('lang')

  const navigate = useNavigate()

  const isAuth = useSelector(getIsAuth)
  const authUser = useSelector(getAuthUser)
  const burgerMenuRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (!burgerMenuRef.current.contains(e.target)) {
      // Click occurred outside the burger menu, close it
      document.getElementById('btn').checked = false;
    }
  };

  useEffect(() => {
    // Add click event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);



  return (
    <div ref={burgerMenuRef} className='burger-menu' onClick={(e) => e.stopPropagation()}>
          <div className="wrapper">
            <input type="checkbox" id="btn" hidden />
            <label htmlFor="btn" className="menu-btn">
              {burger}
              {closeBurgerIcon}
            </label>
            <nav id="sidebar">
              <div className='logo-image'>
              <NavLink to={'/' + leng}>{logoImage}</NavLink>
              </div>

              <ul className="list-items">
              <div className='drop-item'>
                    <NavMenuItem index="1" path={"/programing"}/>
                    <ul className='drop-menu'>
                         <NavMenuItem index="8" path="/web-project"/>
                         <NavMenuItem index="12" path="/mobile"/>     
                         <NavMenuItem index="10" path="/support"/>     
                         <NavMenuItem index="11" path="/3d-modeling"/>     
                         <NavMenuItem index="13" path="/games"/>     
                         <NavMenuItem index="9" path="/website-promotion"/>
                    </ul> 



                </div>
                <NavMenuItem index = "2" path="/projects"/>
                <NavMenuItem index="7" path="/news"/>
                <NavMenuItem index = "3" path="/aboteus"/>
                <NavMenuItem index = "4" path="/contact"/>
              </ul>



              <div className="icons">
                  { !isAuth && <div className='registr_and_login_buttons_div'>
                    <div className='my-reg_log_class'>
                        <a href="#" id='registre'>{loginIcon}</a>
                        <LoginButton path= {leng + "/login"}/>
                    </div>

                    <div className='my-reg_log_class'>
                        <a href="#" id='login'>{RegistreIcon}</a>
                        <RegistreButton path={leng + "/registr"}/>
                    </div>
                  </div>}

                  {isAuth && <div className='user-div' onClick={()=> navigate(`/${leng}/profilePage`)}>
                    <img src={(authUser.avatar !== null && authUser.avatar !== "") ? authUser.avatar : defaultAvatar} alt="avatar" />
                    <span>{authUser.name}</span>
                  </div>}
                  
                  <div className='my-leng_class'>
                      <SelectLng/>
                  </div>
                    
 
              </div>

            </nav>
          </div>
         
</div>

  )

}

export default BurgerMenu