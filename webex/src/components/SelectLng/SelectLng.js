import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './SelectLng.css'
import { lengIcon } from '../../iconFolder/icon';

function SelectLng() {
    const { t, i18n } = useTranslation();
    const leng = localStorage.getItem('lang')
    const [defaultLng, setDefaultLng] = useState('')

    const changeLanguage = (lng) => {
        console.log(lng,'hhhhhhjgckndvkjn');
        i18n.changeLanguage(lng);
        const ggg = localStorage.getItem('lang')
        console.log(ggg, 'ggg');
        console.log(lng, 'lng');
        const pathname = window.location.pathname
        console.log(pathname+ ' pathname');

        const hhhh = pathname.replace('/'+ggg, '/'+lng)
        console.log(hhhh,6666666666);
        localStorage.setItem('lang', lng)

        window.location.href = hhhh
      };

    useEffect(()=>{
      if (leng == "en") {
        setDefaultLng('Eng')
      }
      else if(leng == "ru"){
        setDefaultLng("Rus")
      }
      else{
        setDefaultLng('Arm')
      }
    },[defaultLng])
      

  return (
    <div className='select-lng'>
       <span>{defaultLng} {lengIcon}</span>
       <ul className='lng-list'>
          {defaultLng !== 'Arm' && <li id="am" onClick={(e) => changeLanguage(e.target.id)}>Arm</li>}
          {defaultLng !== 'Rus' && <li id="ru" onClick={(e) => changeLanguage(e.target.id)}>Rus</li>}
          {defaultLng !== 'Eng' && <li id="en" onClick={(e) => changeLanguage(e.target.id)}>Eng</li>}
       </ul>
    </div>
  )
}

export default SelectLng