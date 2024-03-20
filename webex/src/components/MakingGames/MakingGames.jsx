import React from 'react';
import KeyWordComponent from '../KeyWordComponent/KeyWordComponent';
import { useTranslation } from 'react-i18next';
import './MakingGames.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import gamesImg1 from '../../images/gamesImg1.jpg';
import gamesImg2 from '../../images/gamesImg2.jpg';
import gamesImg3 from '../../images/gamesImg3.jpg';
import gamesImg4 from '../../images/gamesImg4.jpg';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function MakingGames() {
   const { t, i18n } = useTranslation();
   return (
      <div className="games_container">
         <div className="mobail-top-div">
            <div className="container">
               <h2>{t('suport')}</h2>
            </div>
         </div>

         <KeyWordComponent />
         <div className="mobi_title">
            <h1>{t('games.0')}</h1>
            <p>{t('games.1')}</p>
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
                  <img src={gamesImg1} alt="slider3d1" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={gamesImg2} alt="slider3d2" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={gamesImg3} alt="slider3d3" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src={gamesImg4} alt="slider3d4" />
               </SwiperSlide>
            </Swiper>
         </div>
         {/* ///////////////////////////// */}
         <div className="games_text_container">
            <div className="games_Benefits">
               <h1>{t('games_Benefits.0')}</h1>
               <p>{t('games_Benefits.1')}</p>
            </div>
            {/* ============uniti============== */}
            <div className="uniti">{t('uniti')}</div>
            <div className="uniti_icon">
               <div className="icon_games">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width={100}
                     height={100}
                     fill="#26716e"
                     className="bi-bi-code-slash"
                     viewBox="0 0 16 16">
                     <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                  </svg>
                  <div className="uniti_p">
                     <p>{t('uniti_text.0')}</p>
                     <p>{t('uniti_text.1')}</p>
                  </div>
               </div>

               <div className="icon_games">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width={100}
                     height={100}
                     fill="#26716e"
                     className="bi bi-boxes"
                     viewBox="0 0 16 16">
                     <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                  </svg>
                  <div className="uniti_p">
                     <p>{t('uniti_text.2')}</p>
                     <p>{t('uniti_text.3')}</p>
                  </div>
               </div>
               <div className="icon_games">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width={100}
                     height={100}
                     fill="#26716e"
                     class="bi bi-database-fill"
                     viewBox="0 0 16 16">
                     <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223" />
                     <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                     <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                     <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                  </svg>
                  <div className="uniti_p">
                     <p>{t('uniti_text.4')}</p>
                     <p>{t('uniti_text.5')}</p>
                  </div>
               </div>
            </div>
            <div className="introducing_p">
               <p>{t('INTRODUCING')}</p>
            </div>
            <div className="diver">
               <div>
                  <p>Blender</p>
               </div>
               <div>
                  <p>Substance</p>
               </div>
               <div>
                  <p>Gimp, c#</p>
               </div>
               <div>
                  <p>DUnity 3D</p>
               </div>
            </div>
            <div className="Our_expertise">
               <div className="h1_ul">
                  <h1>{t('Our_expertise.0')}</h1>
                  <ul>
                     <li>{t('Our_expertise.1')}</li>
                     <li>{t('Our_expertise.2')}</li>
                     <li>{t('Our_expertise.3')}</li>
                     <li>{t('Our_expertise.4')}</li>
                     <li>{t('Our_expertise.5')}</li>
                     <li>{t('Our_expertise.6')}</li>
                     <li>{t('Our_expertise.7')}</li>
                     <li>{t('Our_expertise.8')}</li>
                  </ul>
               </div>
               {/* //////////////////////////// */}
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
                  <div className="button_title">
                     <p>{t('buttonsSide.0')}</p>
                  </div>
                  <div className="buttons_side">
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.1')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.2')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.3')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.4')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.5')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to="/a">
                           <button class="btn-15">
                              <span>{t('buttonsSide.6')}</span>
                           </button>
                        </NavLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MakingGames;
