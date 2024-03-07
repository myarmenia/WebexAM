import React, { useState } from 'react'
import './Footer.css'
import { arrowIcon, fbIcon, instaIcon, linkedinIcon, rightArrowIcon } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
function Footer() {

    const { t, i18n } = useTranslation();
    const leng = localStorage.getItem('lang')
    const {pathname} = useLocation()
   
  return (
    <div className='footer' style={{backgroundColor: (pathname !== `/${leng}/contact` && pathname !== `/${leng}/programing`) && "var(--main_color)", backgroundImage: (pathname !== `/${leng}/contact` && pathname !== `/${leng}/programing`) && "none" }}>
        
            <div className='footer-content'>
                <ul className='footer-menu'>
                    <li><span>{rightArrowIcon} </span>{t('footerMenu.'+ '0')}</li>
                    <li><span>{t('footerMenu.'+ '1')} </span><a href="#">info@webex.am</a></li>
                    <li><span>{t('footerMenu.'+ '2')} </span>+374 96 10 10 17</li>
                    <li><span>{t('footerMenu.'+ '3')} </span>{t('footerMenu.'+ '4')}</li>
                </ul>
                <div className='footer-right-div'>
                    <a href="#">WEBEX TECHNOLOGIES</a>
                    <span>{t('footerMenu.'+ '5')}</span>
                    <div className='footer-icons'>
                        {arrowIcon}
                        <a href="https://www.facebook.com/webexarmenia" target='_blanc'>{fbIcon}</a>
                        <a href="https://www.instagram.com/webex.am/" target='_blanc'>{instaIcon}</a>
                        <a href="https://www.linkedin.com/groups/13856890/" target='_blanc'>{linkedinIcon}</a>

                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Footer