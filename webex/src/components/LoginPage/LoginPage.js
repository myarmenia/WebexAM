import { Formik } from 'formik';
import * as yup from 'yup';
import './LoginPage.css';
import Button from '../Button/Button';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { globImg } from '../../images/images';
import SectionTitle from '../SectionTitle/SectionTitle';
// import ParticleSliderComponent from "../AnimLogo/AnimLogo";
import AnimLogo from '../AnimLogo/AnimLogo.tsx';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { eyeIcon } from '../../iconFolder/icon.js';
import { useEffect, useRef, useState } from 'react';
import { postLogin } from '../../store/slices/LoginSlice/LoginApi.js';
import { useSelector, useDispatch } from 'react-redux';
import './LoginPage.css';

import { registerDropData } from '../../data.js';

import vector from '../../images/Vector.png';
import {
   selectLogin,
   selectLoginError,
   selectLoginLoading,
   setLogin,
} from '../../store/slices/LoginSlice/LoginSlice.js';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal.js';
import MessageModal from '../MessageModal/MessageModal.js';
import { getIsAuth } from '../../store/slices/Auth/AuthSlice.js';
import {
   selectResetPassword,
   selectResetPasswordLoading,
} from '../../store/slices/ResetEmailSlice/ResetEmailSlice.js';
function LoginPage() {
   const [viewPassword, setViewPassword] = useState(true);
   const [openModal, setOpenModal] = useState(false);
   const [messageModal, setMessageModal] = useState(false);
   const [messageModalResetPass, setMessageModalResetPass] = useState(false);
   const isAuth = useSelector(getIsAuth);

   const [itemId, setItemId] = useState(0);

   const { t, i18n } = useTranslation();

   const dispatch = useDispatch();

   const navigate = useNavigate();

   const respLogin = useSelector(selectLogin);
   const respEmail = useSelector(selectResetPassword);

   const loading = useSelector(selectLoginLoading);

   const loading_for_reset_email = useSelector(selectResetPasswordLoading);

   const leng = localStorage.getItem('lang');

   const validationSchema = yup.object().shape({
      email: yup
         .string()
         .email(t('validation_reg_log.' + '1'))
         .required(t('validation_reg_log.' + '0')),
      password: yup.string().required(t('validation_reg_log.' + '0')),
   });

   async function handleLogSub(e, handleSubmit, isValid, dirty) {
      e.preventDefault();
      handleSubmit();
      if (e.target[0].value && e.target[1].value) {
         if (e.target[0].value && e.target[1].value) {
            await dispatch(postLogin({ email: e.target[0].value, password: e.target[1].value }));
            !respLogin.data.isAuth && setMessageModal(true);
         }
      }
   }

   useEffect(() => {
      isAuth && navigate(`/${leng}/profilePage`);
   }, [isAuth]);

   const hnadleChangeItem = (id) => {
      if (itemId === id) {
         setItemId(0);
      } else {
         setItemId(id);
      }
   };
   return (
      <div className="registre_full_div">
         <Formik
            initialValues={{
               email: '',
               password: '',
            }}
            onSubmit={(values, { resetForm }) => {
               resetForm();
            }}
            validateOnBlur
            validationSchema={validationSchema}>
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               isValid,
               handleSubmit,
               dirty,
            }) => (
               <div className="login">
                  <div className="container">
                     <form
                        className="log-form"
                        onSubmit={(e) => handleLogSub(e, handleSubmit, isValid, dirty)}>
                        <SectionTitle title={t('reg_and_log.' + '1')} />

                        <div className="email-inp">
                           <input
                              type="email"
                              name="email"
                              placeholder={t('reg_and_log.' + '3')}
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {touched.email && errors.email && (
                              <p className="error">{errors.email}</p>
                           )}
                        </div>

                        <div className="password-inp">
                           <input
                              type={viewPassword ? 'password' : 'text'}
                              name="password"
                              placeholder={t('reg_and_log.' + '5')}
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <span onClick={() => setViewPassword(!viewPassword)}>{eyeIcon}</span>
                           {touched.password && errors.password && (
                              <p className="error">{errors.password}</p>
                           )}
                        </div>

                        {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                        <SubmitBtn index="0" />
                        <h6>
                           {t('reg_and_log.' + '8')}{' '}
                           <NavLink to={`/${leng}/registr`}>{t('reg_and_log.' + '10')}</NavLink>
                        </h6>
                        <h5>
                           {t('reg_and_log.' + '14')}{' '}
                           <span onClick={() => setOpenModal(true)}>
                              {t('reg_and_log.' + '15')}
                           </span>
                        </h5>
                     </form>

                     <div className="log_img_div">
                        <AnimLogo />
                     </div>

                     {openModal && (
                        <ChangePasswordModal
                           setOpenModal={setOpenModal}
                           openModal={openModal}
                           {...{ setMessageModalResetPass }}
                        />
                     )}

                     {messageModalResetPass && (
                        <MessageModal
                           txt={
                              respEmail.data.message ? respEmail.data.message : respEmail.data.error
                           }
                           path={`/${leng}/login`}
                           {...{ setMessageModalResetPass }}
                           loading={loading_for_reset_email}
                        />
                     )}
                     {messageModal && (
                        <MessageModal
                           txt={respLogin.data.error}
                           path={`/${leng}/login`}
                           {...{ setMessageModal }}
                           loading={loading}
                        />
                     )}
                  </div>
               </div>
            )}
         </Formik>

         <div className="title_texth1 ">
          
            <h1>Ծրագրավորման դասընթացներ</h1>
         </div>
         <div className="register_drop_down">
            <div className="container">
               {registerDropData.map((el) => (
                  <div
                     key={el.id}
                     className="register_drop_down_item"
                     onClick={() => hnadleChangeItem(el.id)}>
                     <div className="button_vector">
                        <div className="btn_dv">
                           <button>
                              {<span>{el.icon}</span>} {el.title}
                           </button>
                           <p>{el.text_p}</p>
                        </div>
                        <div className={`vector_img ${itemId === el.id ? 'rotate' : ''}`}>
                           <img src={vector} alt="" />
                        </div>
                     </div>

                     <div style={{ display: itemId === el.id ? 'block' : 'none' }}>
                        <ul>
                           <li>{t('dropTxt_' + el.id + '.0')}</li>
                           <li>{t('dropTxt_' + el.id + '.1')}</li>
                           <li>{t('dropTxt_' + el.id + '.2')}</li>
                           <li>{t('dropTxt_' + el.id + '.3')}</li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default LoginPage;
