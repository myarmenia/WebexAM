import { Formik } from 'formik';
import * as yup from 'yup';
import './Register.css';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import SectionTitle from '../SectionTitle/SectionTitle';
import AnimLogo from '../AnimLogo/AnimLogo.tsx';
import { NavLink, useLocation } from 'react-router-dom';
import { eyeIcon } from '../../iconFolder/icon.js';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '../../store/slices/RegisterSlice/RegisterApi.js';
import {
   selectRegister,
   selectRegisterError,
   selectRegisterIsActive,
   selectRegisterLoading,
} from '../../store/slices/RegisterSlice/RegisterSlice.js';
import MessageModal from '../MessageModal/MessageModal.js';


function Registre() {
   const [viewPassword, setViewPassword] = useState(true);
   const [viewConfirmPassword, setConfirmViewPassword] = useState(true);
   const [messageModal, setMessageModal] = useState(false);
   

   const { t, i18n } = useTranslation();

   const dispatch = useDispatch();

   const leng = localStorage.getItem('lang');

   const registreResp = useSelector(selectRegister);

   const loading = useSelector(selectRegisterLoading);

   async function handleLogSub(e, handleSubmit, isValid, dirty) {
      e.preventDefault();
      handleSubmit();
      if (
         e.target[0].value &&
         e.target[1].value &&
         e.target[2].value &&
         e.target[3].value &&
         e.target[3].value === e.target[4].value &&
         isValid
      ) {
         await dispatch(
            postRegister({
               name: e.target[0].value,
               email: e.target[1].value,
               phone: e.target[2].value,
               password: e.target[3].value,
               confirmPassword: e.target[4].value,
            }),
         );

         setMessageModal(true);
      }
   }

   const validationSchema = yup.object().shape({
      name: yup.string().required(t('validation_reg_log.' + '0')),
      phone: yup
         .string()
         .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, t('validation_reg_log.' + '5'))
         .required(t('validation_reg_log.' + '0')),
      email: yup
         .string()
         .email(t('validation_reg_log.' + '1'))
         .required(t('validation_reg_log.' + '0')),
      password: yup
         .string()
         .matches(/[0-9]/, t('validation_reg_log.' + '2'))
         .matches(/[a-z]/, t('validation_reg_log.' + '3'))
         .min(8, t('validation_reg_log.' + '6'))
         .required(t('validation_reg_log.' + '0')),
      confirmPassword: yup
         .string()
         .oneOf([yup.ref('password')], t('validation_reg_log.' + '4'))
         .required(t('validation_reg_log.' + '0')),
   });

   return (
      
         <Formik
            initialValues={{
               name: '',
               lastName: '',
               email: '',
               password: '',
               phone: '',
               confirmPassword: '',
            }}
            onSubmit={(values, { resetForm }) => {
               // resetForm()
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
               <div className="register">
                  <div className="container">
                     <form
                        className="reg-form"
                        onSubmit={(e) => handleLogSub(e, handleSubmit, isValid, dirty)}>
                        <SectionTitle title={t('reg_and_log.' + '0')} />
                        <div className="name-inp">
                           <input
                              type="text"
                              name="name"
                              placeholder={t('reg_and_log.' + '2')}
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {touched.name && errors.name && <p className="error">{errors.name}</p>}
                        </div>

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

                        <div className="tel-inp">
                           <input
                              type=""
                              name="phone"
                              placeholder={t('reg_and_log.' + '4')}
                              value={values.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           {touched.phone && errors.phone && (
                              <p className="error">{errors.phone}</p>
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

                        <div className="confirmPassword-inp">
                           <input
                              type={viewConfirmPassword ? 'password' : 'text'}
                              name="confirmPassword"
                              placeholder={t('reg_and_log.' + '6')}
                              value={values.confirmPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <span onClick={() => setConfirmViewPassword(!viewConfirmPassword)}>
                              {eyeIcon}
                           </span>
                           {touched.confirmPassword && errors.confirmPassword && (
                              <p className="error">{errors.confirmPassword}</p>
                           )}
                        </div>

                        {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                        <SubmitBtn index="1" />
                        <h6>
                           {t('reg_and_log.' + '7')}{' '}
                           <NavLink to={`/${leng}/login`}>{t('reg_and_log.' + '9')}</NavLink>
                        </h6>
                     </form>

                     <div className="log_img_div">
                        <AnimLogo />
                     </div>
                  </div>

                  {messageModal && (
                     <MessageModal
                        txt={registreResp.data.message}
                        path={`/${leng}/registr`}
                        {...{ setMessageModal }}
                        loading={loading}
                     />
                  )}
               </div>
            )}
         </Formik>

       
      
   );
}

export default Registre;
