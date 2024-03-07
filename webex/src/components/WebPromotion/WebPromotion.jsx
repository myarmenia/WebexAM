import React from 'react';
import './WebPromotion.css';
import Promotion1 from '../../images/Promotion1.jpg';
import Promotion2 from '../../images/Promotion2.jpg';
import Promotion3 from '../../images/Promotion3.jpg';
import Promotion4 from '../../images/download.png';
import KeyWordComponent from '../KeyWordComponent/KeyWordComponent';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function WebPromotion() {
   const { t, i18n } = useTranslation();
   return (
      <div className="all_promotion">
         <div className="web-project-page-top-div">
            <div className="container">
               <h2>{t('all_promotion')}</h2>
            </div>
         </div>
         <KeyWordComponent />
         <div className="top_side">
            <div className="web-project-page-web-development-div">
               <h4>{t('web_project_page_web_development_title')}</h4>
               <div className="web-project-page-web-development-div-info">
                  <p>{t('web_project_page_web_development_info.0')}</p>
                  <p>{t('web_project_page_web_development_info.1')}</p>
               </div>
            </div>

            <div className="top_side_promotion">
               <h6 className="promotion_title">{t('promotionTitle')}</h6>
               <p className="promotion_text">{t('promotionText')}</p>
               <div className="photo_divs">
                  <img src={Promotion1} alt="Promotion1" className="img1" />
                  <div className="photo_divs_rightDiv">
                     <p className="photo_divs_titleRight">{t('photoDivs.0')}</p>
                     <p className="photo_divs_textRight">{t('photoDivs.1')}</p>
                  </div>
               </div>
               <div className="photo_divs">
                  <img src={Promotion2} alt="Promotion2" className="img1" />
                  <div className="photo_divs_rightDiv">
                     <p className="photo_divs_titleRight">{t('photoDivs.2')}</p>
                     <p className="photo_divs_textRight">{t('photoDivs.3')}</p>
                  </div>
               </div>
               <div className="photo_divs">
                  <img src={Promotion3} alt="Promotion3" className="img1" />
                  <div className="photo_divs_rightDiv">
                     <p className="photo_divs_titleRight">{t('photoDivs.4')}</p>
                     <p className="photo_divs_textRight">{t('photoDivs.5')}</p>
                  </div>
               </div>
               <div className="photo_divs">
                  <img src={Promotion4} alt="Promotion3" className="img1" />
                  <div className="photo_divs_rightDiv">
                     <p className="photo_divs_titleRight">{t('photoDivs.4')}</p>
                     <p className="photo_divs_textRight">{t('photoDivs.6')}</p>
                  </div>
               </div>

               <h5>{t('textDivTop.0')}</h5>
               <div className="texts_div">
                  <p>{t('textDivTop.1')}</p>
                  <p>{t('textDivTop.2')}</p>
                  <p>{t('textDivTop.3')}</p>
                  <p>{t('textDivTop.4')}</p>
                  <p>{t('textDivTop.5')}</p>
                  <p>{t('textDivTop.6')}</p>
                  <p>{t('textDivTop.7')}</p>
                  <p>{t('textDivTop.8')}</p>
               </div>
            </div>
            <div className="middle_div">
               <p className="middle_div_title">{t('middleSide.0')}</p>
               <p className="middle_div_text">{t('middleSide.1')}</p>
               <div className="middle_div_Allicons">
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-graph-up-arrow"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path
                           fill-rule="evenodd"
                           d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
                        />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.2')}</p>
                  </div>
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-tv"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.3')}</p>
                  </div>
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-car-front-fill"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.4')}</p>
                  </div>
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-heart-pulse"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                        <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.5')}</p>
                  </div>
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-gift-fill"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.6')}</p>
                  </div>
                  <div className="middle_div_Allicons_div">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="70"
                        fill="url(#gradient)"
                        class="bi bi-mortarboard-fill"
                        viewBox="0 0 16 16">
                        <defs>
                           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stop-color="#26716e" />
                              <stop offset="100%" stop-color="#a3ebd5" />
                           </linearGradient>
                        </defs>
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                     </svg>

                     <p className="middle_div_Allicons_names">{t('middleSide.7')}</p>
                  </div>
               </div>
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
               <div className="buttons_div">
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
                           <span>{t('<buttonsSide className="6"></buttonsSide>')}</span>
                        </button>
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default WebPromotion;
