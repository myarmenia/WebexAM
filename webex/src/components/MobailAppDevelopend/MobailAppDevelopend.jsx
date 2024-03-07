import React from 'react';
import './MobailAppDevelopend.css';
import KeyWordComponent from '../KeyWordComponent/KeyWordComponent';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import mobailImg1 from '../../images/mobile AutoHelp1.jpg';
import mobailImg2 from '../../images/mobile AutoHelp2.jpg';
import mobailImg3 from '../../images/mobileBron Rest3.jpg';
import mobailImg4 from '../../images/mobile AutoHelp4.jpg';
import mobailImg5 from '../../images/mobile AutoHelp5.jpg';
import mobailImg6 from '../../images/mobile AutoHelp6.jpg';
import mobailImg7 from '../../images/mobile AutoHelp7.jpg';
import mobailImg8 from '../../images/mobile AutoHelp8.jpg';
import mobailImg9 from '../../images/mobile AutoHelp9.jpg';
import mobailImg10 from '../../images/mobile AutoHelp10.jpg';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function MobailAppDevelopend() {
   const { t, i18n } = useTranslation();
   return (
      <div className="mobail_container">
         <div className="mobail-top-div">
            <div className="container">
               <h2>{t('suport')}</h2>
            </div>
         </div>

         <KeyWordComponent />
         <div className="mobi_title">
            <h1>{t('mobail')}</h1>
            <p>{t('mobail_text')}</p>
         </div>
         {/* ////////////////////////////////// */}

         <div className="slider_side">
            <Swiper
               spaceBetween={30}
               effect={'fade'}
               navigation={true}
               loop={true}
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               modules={[Autoplay, EffectFade, Navigation, Pagination]}
               className="mySwiper">
               <SwiperSlide>
                  <img src={mobailImg1} alt="slider3d1"  />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg2} alt="slider3d2" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg3} alt="slider3d3" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg4} alt="slider3d4" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg5} alt="slider3d5" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg6} alt="slider3d6" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg7} alt="slider3d7" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg8} alt="slider3d8" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg9} alt="slider3d9" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={mobailImg10} alt="slider3d9" />
               </SwiperSlide>
            </Swiper>
         </div>
         {/* ///////////////////////////// */}

         <div className="mobi_text">
            <h3>{t('Reliable.0')}</h3>
            <p>{t('Reliable.1')}</p>
         </div>
         <div className="Development_of_Mobile">
            <div>
               <h4>{t('Development_of_Mobile.0')}</h4>
               <div className="solid"></div>
               <p>{t('Development_of_Mobile.1')}</p>
            </div>
            <div>
               <h4>{t('Development_of_Mobile.2')}</h4>
               <div className="solid"></div>
               <p>{t('Development_of_Mobile.3')}</p>
            </div>
            <div>
               <h4>{t('Development_of_Mobile.4')}</h4>
               <div className="solid"></div>
               <p>{t('Development_of_Mobile.5')}</p>
            </div>
            <div>
               <h4>{t('Development_of_Mobile.6')}</h4>
               <div className="solid"></div>
               <p>{t('Development_of_Mobile.7')}</p>
            </div>
         </div>

         <div id="h3">
            <h4>{t('introducing')}</h4>
         </div>

         <div className="diver">
            <div>
               <p>Java/Java8</p>
            </div>
            <div>
               <p>APIs</p>
            </div>
            <div>
               <p>Swift</p>
            </div>
            <div>
               <p>Databases</p>
            </div>
            <div>
               <p>Android SDK</p>
            </div>
            <div>
               <p>Material Design</p>
            </div>
            <div>
               <p>Spatial Reasoning</p>
            </div>
            <div>
               <p>Design Guidclines</p>
            </div>
         </div>
         <div className="buttom_side_container">
            <div className="mobail_ios">
               <div id="ios">
                  <h3>{t('Reliable_ios.0')}</h3>
               </div>
               <p>{t('Reliable_ios.1')}</p>
            </div>
            <div className="bottom_side">
               <div className="bottom_side_textss">
                  <p className="bottom_side_p1">{t('bottomSideTexts.0')}</p>
                  <span className="bottom_side_p2">{t('bottomSideTexts.1')}</span>
                  <p className="bottom_side_p3">{t('bottomSideTexts.2')}</p>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.3')} </span>
                     <span>{t('bottomSideTexts.4')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.5')}</span>
                     <span>{t('bottomSideTexts.6')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.7')} </span>
                     <span>{t('bottomSideTexts.8')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.9')}</span>
                     <span>{t('bottomSideTexts.10')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.11')} </span>
                     <span>{t('bottomSideTexts.12')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.13')}</span>
                     <span>{t('bottomSideTexts.14')}</span>
                  </div>
                  <p className="bottom_side_p4">{t('bottomSideTexts.15')}</p>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.16')}</span>
                     <span>{t('bottomSideTexts.17')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.18')} </span>
                     <span>{t('bottomSideTexts.19')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span>{t('bottomSideTexts.20')}</span>
                     <span className="bottom_side_span1"> {t('bottomSideTexts.21')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.22')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.23')}</span>
                     <span>{t('bottomSideTexts.24')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span>{t('bottomSideTexts.25')} </span>
                     <span className="bottom_side_span1">{t('bottomSideTexts.26')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span>{t('bottomSideTexts.27')}</span>
                  </div>
                  <div className="bottom_side_text_div">
                     <span className="bottom_side_span1">{t('bottomSideTexts.28')}</span>
                  </div>
               </div>
               <div className="buttons_side">
                  <p style={{ color: 'white' }}>{t('buttonsSide.0')}</p>
                  <div className="buttons_div">
                     <div className="buttons_div_divs">
                        <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.1')}</span></button></NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.2')}</span></button></NavLink>

                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.3')}</span></button></NavLink>
                        
                     </div>
                     <div className="buttons_div_divs">
                     <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.4')}</span></button></NavLink>

                     </div>
                     <div className="buttons_div_divs">
                     <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.5')}</span></button></NavLink>

                     </div>
                     <div className="buttons_div_divs">
                     <NavLink to="/a"><button class="btn-15"><span>{t('buttonsSide.6')}</span></button></NavLink>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MobailAppDevelopend;
