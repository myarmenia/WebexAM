import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import './VideoCoursesSectionItem.css';
import { useTranslation } from 'react-i18next';

function VideoCoursesSectionItem({ id, title, value, timeLine, icon, txt }) {
   const [activeBtn, setactiveBtn] = useState({ online: false, ofline: false });
   const leng = localStorage.getItem('lang');
   const { t, i18n } = useTranslation();
   const titleRef = useRef(null);

   return (
      <div className="video-courses-section-item">
         <div className="video-courses-section-item-info-div-1">
            <h2>{'0' + id} </h2>
            <div className="video-courses-section-item-info-div-1-drop">
               <h5>
                  {t('VideoCoursesSection_title.' + txt)} {icon}
               </h5>

               <p>{t('videoCoursesSectionfeatures.' + txt)}</p>
               <div>
                  <p>{t('videoCoursesSectionTxt.' + txt)}</p>
               </div>
            </div>
            <span>{t('VideoCoursesSection_value.' + txt)}</span>
            <span>{t('VideoCoursesSection_duration.' + txt)}</span>
         </div>

         <div className="video-courses-section-item-info-div-2">
            <div>
               <h4>{t('videoCoursesSectionTitleCourses_month')}</h4>
               <div className="videoCoursesSectionTitleGround">
                  <h1 ref={titleRef}>{t('videoCoursesSectionTitleGround.' + txt)}</h1>
               </div>
               <h3>{t('videoCoursesSectionTitleCourses')}</h3>
            </div>
            <div className="radio-inp my_radio_inp">
               <div className="label-btns my_label_btns">
                  <label>
                     <input type="radio" name="type" value="online" />
                     <div
                        style={{
                           backgroundColor: activeBtn.online && '#00bcff',
                           outline: activeBtn.online && 'none',
                        }}
                        className="btn_ online-btn"
                        onClick={() => setactiveBtn({ online: true, ofline: false })}>
                        Online
                     </div>
                  </label>
                  <label>
                     <input type="radio" name="type" value="offline" />
                     <div
                        style={{
                           backgroundColor: activeBtn.ofline && '#00bcff',
                           outline: activeBtn.ofline && 'none',
                        }}
                        className="btn_ ofline-btn"
                        onClick={() => setactiveBtn({ online: false, ofline: true })}>
                        Offline
                     </div>
                  </label>
               </div>
            </div>

            <Button index="1" path={`/${leng}/courses-registration`} addres={titleRef} />
         </div>
      </div>
   );
}

export default VideoCoursesSectionItem;
