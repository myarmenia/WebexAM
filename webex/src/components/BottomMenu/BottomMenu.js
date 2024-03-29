import React, { useState } from 'react';
import { botomMailIcon, botomtelIcon, homeIcon, orderIcon, userIcon, videoIcon } from '../../iconFolder/icon';
import { NavLink } from 'react-router-dom';
import { elips } from '../../images/images';
import './BottomMenu.css'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthUser, getIsAuth } from '../../store/slices/Auth/AuthSlice';

const BottomMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const leng = localStorage.getItem('lang')

  const { t, i18n } = useTranslation();

  const isAuth = useSelector(getIsAuth)
  const authUser = useSelector(getAuthUser)

  function callPhoneNumber(e) {
    window.location.href = 'tel:' + e.target.innerText
}


  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
          <NavLink to={leng +"/"}>
            <span className="icon">
              {homeIcon}
            </span>
            <span className="text">{t('navMenu.' + '5')}</span>
          </NavLink>
        </li>
        <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
          <NavLink to={leng + "/programing"}>
            <span className="icon">
            {orderIcon}
            </span>
            <span className="text">{t('navMenu.' + '6')}</span>
          </NavLink>
        </li>
        <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
        <NavLink to={!isAuth ? leng +"/courses-registration" : leng + "/profilePage"}>
            <span className="icon">
            {!isAuth ? videoIcon : userIcon}
            </span>
            <span className="text">{!isAuth ? t('navMenu.' + '0') : authUser.name}</span>
          </NavLink>
        </li>

        <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleItemClick(3)}>
        <NavLink to="mailto:info@webex.am">
            <span className="icon">
            {botomMailIcon}
            </span>
            <span className="text">{t('navMenu.' + '14')}</span>
          </NavLink>
        </li>

        <li className={`list ${activeIndex === 4 ? 'active' : ''}`} onClick={() => handleItemClick(4)}>
        <NavLink to={leng + "/"}>
            <div className='nav_top_phone'>
                    <span className='icon'>{botomtelIcon}</span>
                    <div className='tel'>
                        <span onClick={(e)=>callPhoneNumber(e)}>+374 96-10-10-17</span>
                        <span onClick={(e)=>callPhoneNumber(e)}>+374 96 40 00 73</span>
                    </div>
                </div>
            <span className="text">{t('navMenu.' + '15')}</span>
          </NavLink>
        </li>

        <div className="indicator">
            
        </div>
      </ul>
    </div>
  );
};

export default BottomMenu;


