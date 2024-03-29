import React from 'react'
import { fbIcon, instaIcon, linkedinIcon, mailIcon, telIcon } from '../../iconFolder/icon'

import './NavTop.css'

function NavTop() {

    function callPhoneNumber(e) {
        window.location.href = 'tel:' + e.target.innerText
    }
  return (
    <div className='nav-top'>
        <div className='container'>
            <div className='mail-block'>
                <span>{mailIcon}</span>
                <a href="mailto:info@webex.am">info@webex.am</a>
            </div>
            <div className='contact'>
                <div className='nav_top_phone'>
                    <span>{telIcon}</span>
                    <div className='tel'>
                        <span onClick={(e)=>callPhoneNumber(e)}>+374 96-10-10-17</span>
                        <span onClick={(e)=>callPhoneNumber(e)}>+374 96-40-00-73</span>
                    </div>
                </div>

                <div className='nav_top_icons'>
                    <a href="https://www.facebook.com/webexarmenia" target='_blanc'>{fbIcon}</a>
                    <a href="https://www.instagram.com/webex.am/" target='_blanc'>{instaIcon}</a>
                    <a href="https://www.linkedin.com/groups/13856890/" target='_blanc'>{linkedinIcon}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavTop