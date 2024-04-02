import React from 'react';
import './WebProjectPage.css';
import KeyWordComponent from '../KeyWordComponent/KeyWordComponent';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function WebProjectPage() {
   const leng = localStorage.getItem('lang');
   const { t, i18n } = useTranslation();
   return (
      <div className="web-project-page">
         <div className="web-project-page-top-div">
            <div className="container">
               <h2>{t('web_project_page_top_div_title')}</h2>
            </div>
         </div>
         <KeyWordComponent />

         <div className="container">
            <div className="web-project-page-web-development-div">
               <h4>{t('web_project_page_web_development_title')}</h4>
               <div className="web-project-page-web-development-div-info">
                  <p>{t('web_project_page_web_development_info.0')}</p>
                  <p>{t('web_project_page_web_development_info.1')}</p>
               </div>
            </div>

            <h1>{t('wey_title')}</h1>

            <p>{t('way_info.0')}</p>
            <p>
               <strong> {t('title_h1.0')}</strong> {t('way_info.1')}
            </p>
            <p>
               <strong> {t('title_h1.1')}</strong> {t('way_info.2')}
            </p>
            <p>
               <strong> {t('title_h1.2')}</strong> {t('way_info.3')}
            </p>
            <p>
               <strong> {t('title_h1.3')}</strong> {t('way_info.4')}
            </p>
            <p>
               <strong> {t('title_h1.4')}</strong> {t('way_info.5')}
            </p>
            <p>
               <strong> {t('title_h1.5')}</strong> {t('way_info.6')}
            </p>
            <p>
               <strong> {t('title_h1.6')}</strong> {t('way_info.7')}
            </p>
            <p>
               <strong> {t('title_h1.7')}</strong> {t('way_info.8')}
            </p>
            <p>
               <strong> {t('title_h1.8')}</strong> {t('way_info.9')}
            </p>
            <p>
               <strong> {t('title_h1.9')}</strong> {t('way_info.10')}
            </p>
            <p>
               <strong> {t('title_h1.10')}</strong> {t('way_info.11')}
            </p>
            <p>
               <strong> {t('title_h1.11')}</strong> {t('way_info.12')}
            </p>
            <p>
               <strong> {t('title_h1.12')}</strong> {t('way_info.13')}
            </p>
            <p>
               <strong> {t('title_h1.13')}</strong> {t('way_info.14')}
            </p>

            <p>{t('development')}</p>

            <p>
               <strong>{t('development_crm.0')}</strong> {t('crm_title.0')}
            </p>
            <ul>
               <li>
                  <strong className={leng === 'ru' ? 'redColor' : 'mediumslateblueColor  '}>
                     {t('development_crm.1')}
                  </strong>
                  {t('crm_title.1')}
               </li>
               <li>
                  <strong className={leng === 'ru' ? 'redColor' : 'mediumslateblueColor  '}>
                     {t('development_crm.2')}
                  </strong>
                  {t('crm_title.2')}
               </li>
               <li>
                  <strong className={leng === 'ru' ? 'redColor' : 'mediumslateblueColor  '}>
                     {t('development_crm.3')}
                  </strong>
                  {t('crm_title.3')}
               </li>
               <li>{t('crm_title.4')}</li>
               <li>{t('crm_title.5')}</li>
            </ul>

            <p>{t('crm_titleP.0')}</p>

            <ul>
               <li>{t('crm_title_li.1')}</li>
               <li>{t('crm_title_li.2')}</li>
               <li>{t('crm_title_li.3')}</li>
               <li>{t('crm_title_li.4')}</li>
               <li>{t('crm_title_li.5')}</li>
               <li>{t('crm_title_li.6')}</li>
               <li>{t('crm_title_li.7')}</li>
               <li>{t('crm_title_li.8')}</li>
               <li>{t('crm_title_li.9')}</li>
               <li>{t('crm_title_li.10')}</li>
               <li>{t('crm_title_li.11')}</li>
               <li>{t('crm_title_li.12')}</li>
               <li>{t('crm_title_li.13')}</li>
               <li>{t('crm_title_li.14')}</li>
               <li>{t('crm_title_li.15')}</li>
               <li>{t('crm_title_li.16')}</li>
               <li>{t('crm_title_li.17')}</li>
               <li>{t('crm_title_li.18')}</li>
               <li>{t('crm_title_li.19')}</li>
               <li>{t('crm_title_li.20')}</li>
               <li>{t('crm_title_li.21')}</li>
               <li>{t('crm_title_li.22')}</li>
            </ul>

            <p>{t('crm_titleP.1')}</p>
            <p>{t('crm_titleP.2')}</p>
            <p>{t('crm_titleP.3')}</p>
            <p>{t('crm_titleP.4')}</p>

            <p>
               <strong>{t('busines_analytic.0')}</strong>
               {t('busines_analytic_title.0')}
            </p>
            <p>
               <strong>{t('busines_analytic.1')}</strong>
               {t('busines_analytic_title.1')}
            </p>
            <p>
               <strong>{t('busines_analytic.2')}</strong>
               {t('busines_analytic_title.2')}
            </p>
            <p>
               <strong>{t('busines_analytic.2')}</strong>
               {t('busines_analytic_title.3')}
            </p>
            <ul>
               <li>{t('busines_analytic_li.0')}</li>
               <li>{t('busines_analytic_li.1')}</li>
               <li>{t('busines_analytic_li.2')}</li>
            </ul>
            <p>
               <strong>{t('busines_analytic_p')}</strong>
               {t('busines_analytic_title_p.0')}
            </p>
            <p>{t('busines_analytic_title_p.1')}</p>

            <div className="introducing ">
               <div id="h4">
                  <h4> {t('introducing')}</h4>
               </div>
               <div className="diver">
                  <div>
                     <p>HTML5</p>
                  </div>
                  <div>
                     <p>CSS3</p>
                  </div>
                  <div>
                     <p>Bootsrap</p>
                  </div>
                  <div>
                     <p>JavaScrip</p>
                  </div>
                  <div>
                     <p>jQuery</p>
                  </div>
                  <div>
                     <p>Ajax</p>
                  </div>
                  <div>
                     <p>React</p>
                  </div>
                  <div>
                     <p>PHP</p>
                  </div>
                  <div>
                     <p>MySQL</p>
                  </div>
                  <div>
                     <p>OOP/MVS</p>
                  </div>
                  <div>
                     <p>Node JS</p>
                  </div>
                  <div>
                     <p>Laravel</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="middle_div">
            <p className="middle_div_title">Branches</p>
            <p className="middle_div_text">
               WebEx Technologies offers software development services to companies from various
               industries.
            </p>
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

                  <p className="middle_div_Allicons_names">BANKING AND FINANCE</p>
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

                  <p className="middle_div_Allicons_names">TELECOMMUNICATION</p>
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

                  <p className="middle_div_Allicons_names">AUTO AND TRANSPORT</p>
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

                  <p className="middle_div_Allicons_names">HEALTH CARE</p>
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

                  <p className="middle_div_Allicons_names">TRADE AND COMMERCE</p>
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

                  <p className="middle_div_Allicons_names">LEARNING AND MARKETING</p>
               </div>
            </div>
         </div>
         <div className="container">
            <h3>{t('adaptability')}</h3>
            <h5>{t('adaptability_title.0')}</h5>
            <h5>{t('adaptability_title.1')}</h5>
            <p>
               <strong>{t('adaptability_title_h.0')}</strong>
               {t('adaptability_title_text.0')}
            </p>
            <p>
               <strong>{t('adaptability_title_h.1')}</strong>
               {t('adaptability_title_text.1')}
            </p>
            <p>
               <strong>{t('adaptability_title_h.2')}</strong>
               {t('adaptability_title_text.2')}
            </p>
            <p>
               <strong>{t('adaptability_title_h.3')}</strong>
               {t('adaptability_title_text.3')}
            </p>
            <p>
               <strong>{t('adaptability_title_h.4')}</strong>
               {t('adaptability_title_text.4')}
            </p>
            <p>
               <strong>{t('adaptability_title_h.5')}</strong>
               {t('adaptability_title_text.5')}
            </p>
            <h5>{t('adaptability_title.1')}</h5>

            <p>
               <strong>{t('Why_to_H.0')}</strong>
               {t('Why_to_text.0')}
            </p>
            <p>{t('Why_to_text.1')}</p>
            <ul className="why_ul">
               <li>
                  {t('Why_to_text.7')}
                  <a href="mailto:info@webex.am," className="Why_to_H">
                     {t('Why_to_H.6')}
                  </a>
               </li>
               <li>
                  {t('Why_to_text.8')}
                  <strong className="Why_to_H">{t('Why_to_H.7')}</strong>
               </li>
               <li>
                  {t('Why_to_text.9')}
                  <strong className="Why_to_H">{t('Why_to_H.8')}</strong>
               </li>
               <li>
                  {t('Why_to_text.10')}
                  <strong className="Why_to_H">{t('Why_to_H.9')}</strong>
               </li>
               <li>
                  {t('Why_to_text.11')}
                  <strong className="Why_to_H">{t('Why_to_H.10')}</strong>
               </li>
            </ul>
            <p>
               {t('Why_to_text.2')}
               <strong>{t('Why_to_H.2')}</strong>
            </p>
            <p>
               {t('Why_to_text.3')}
               {t('Why_to_H.3')}
            </p>
            <p>
               <strong>{t('Why_to_H.4')}</strong>
            </p>
            <p>
               <strong>{t('Why_to_H.5')}</strong>
               {t('Why_to_text.5')}
            </p>
         </div>

         <div className="buttons">
           <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/web-project`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.1')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/website-promotion`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.2')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/support`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.3')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/3d-modeling`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.4')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/mobile`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.5')}</span>
                           </button>
                        </NavLink>
                     </div>
                     <div className="buttons_div_divs">
                        <NavLink to={`/${leng}/games`}>
                           <button class="btn-15">
                              <span>{t('buttonsSide.6')}</span>
                           </button>
                        </NavLink>
                         </div>
         </div>
      </div>
   );
}

export default WebProjectPage;
