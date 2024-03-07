import React, { useEffect, useState } from 'react'
import NavMenuItem from '../NavMenuItem/NavMenuItem'
import { dropIcon, navIcon } from '../../iconFolder/icon'
import './NavMenu.css'
import { logoImage, logoImage_2 } from '../../images/images'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getIsAuth } from '../../store/slices/Auth/AuthSlice'

function NavMenu() {
    
     const { t, i18n } = useTranslation();

     const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';

     const isAuth = useSelector(getIsAuth)



  return (
       <div className='nav-menu-div' style={{columnGap: isAuth ? '30px' : '110px'}}>

          {!isAuth ? <NavLink to={'/' + leng}>{logoImage}</NavLink> : <NavLink to={'/' + leng}>{logoImage_2}</NavLink>}
            
             <ul className='nav-menu'>
                <div className='drop-item'>
                    {/* <li className='programing'>{t('navMenu.'+ '1')} {dropIcon}</li> */}
                    <NavMenuItem index="1" path="/programing" drop={dropIcon}/>
                    <ul className='drop-menu'>
                         <NavMenuItem index="8" path="/web-project"/>
                         <NavMenuItem index="12" path="/mobile"/>   
                          <NavMenuItem index="16" path="/3"/>    
                         <NavMenuItem index="10" path="/support"/>     
                         <NavMenuItem index="11" path="/3d-modeling"/>     
                         <NavMenuItem index="13" path="/games"/>  
                         <NavMenuItem index="9" path="/website-promotion"/>  
                    </ul> 

                </div>
                <NavMenuItem index="2" path="/projects"/>
                <NavMenuItem index="7" path="/news"/>
                <NavMenuItem index="3" path="/aboteus"/>
                <NavMenuItem index="4" path="/contact"/>
            </ul>
             
       </div>
  )
}

export default NavMenu