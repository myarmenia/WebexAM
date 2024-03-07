import React from 'react'
import './NavMenuItem.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function NavMenuItem({index, path, drop}) {
  const { t, i18n } = useTranslation();
  const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';

  return (
      <li className='nav-menu-item'><NavLink className={({isActive})=> isActive ? 'active-item':''} to={leng + path}>{t('navMenu.'+ index)}</NavLink>{drop}</li>
  )
}

export default NavMenuItem