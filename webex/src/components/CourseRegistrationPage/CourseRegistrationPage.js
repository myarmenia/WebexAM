import React, { useEffect, useState } from 'react';
import './CourseRegistrationPage.css';
import { useTranslation } from 'react-i18next';
import SubmitBtn from '../SubmitBtn/SubmitBtn.js';
import { Formik } from 'formik';
import SectionTitle from '../SectionTitle/SectionTitle.js';
import * as yup from 'yup';
import AnimLogo from '../AnimLogo/AnimLogo.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { postTrialCourse } from '../../store/slices/TrialCourseSlice/TrialCourseApi.js';
import MessageModal from '../MessageModal/MessageModal.js';
import {
   selectTrialCourse,
   selectTrialCourseLoading,
} from '../../store/slices/TrialCourseSlice/TrialCourseSlice.js';

import { selectDevCoursesData } from '../../store/slices/DevelopentCoursisSlice/DevelopentCoursisSlice.js';
import { getDevCourses } from '../../store/slices/DevelopentCoursisSlice/DevelopentCoursisApi.js';

import vector from '../../images/Vector.png';

function CourseRegistrationPage() {
   const [activeBtn, setactiveBtn] = useState({ online: false, ofline: false });
   const [messageModal, setMessageModal] = useState(false);

   const [item, setItem] = useState(0);

   const respDevCoursesData = localStorage.getItem('title');

   const { t, i18n } = useTranslation();

   const respTrialCourse = useSelector(selectTrialCourse);

   const loading = useSelector(selectTrialCourseLoading);

   const respDevCourses = useSelector(selectDevCoursesData);
   

   const dispatch = useDispatch();

   const validationSchema = yup.object().shape({
      name: yup.string().required(t('validation_reg_log.0')),
      phone: yup
         .string()
         .matches(/^\+?[1-9][0-9]{7,14}$/, t('validation_reg_log.' + '5'))
         .required(t('validation_reg_log.' + '0')),
      type: yup.string(),
   });

   const handleFormSubmit = (e, handleSubmit, isValid) => {
      e.preventDefault();

      handleSubmit();
      if (e.target[0].value && e.target[1].value && isValid) {
         dispatch(
            postTrialCourse({
               name: e.target[0].value,
               phone: e.target[1].value,
               type: e.target[2].checked
                  ? e.target[2].value
                  : e.target[3].checked
                  ? e.target[3].value
                  : '',
            }),
         );

         setMessageModal(true);
      }
   };

   useEffect(() => {
      dispatch(getDevCourses());
   }, []);

   const handleClicke = (id) => {
      if (item === id) {
         setItem(0);
      } else {
         setItem(id);
      }
   };

   
   return (
      <div className="course-registration-page-block">
         <div className="course-registration-page">
            <Formik
               initialValues={{
                  name: '',
                  phone: '',
                  courses: '',
                  type: '',
               }}
               onSubmit={(values, { resetForm }) => {
                  // setUser([...user, { ...values }]);
                  // setPage('log');
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
                  <div className="register">
                     <div className="container">
                        <form
                           className="reg-form"
                           onSubmit={(e) => handleFormSubmit(e, handleSubmit, isValid)}>
                           <SectionTitle title={t('reg_and_log.' + '11')} />
                           <div className="name-inp">
                              <input
                                 type="text"
                                 name="name"
                                 placeholder={t('reg_and_log.' + '2')}
                                 value={values.name}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                              />
                              {touched.name && errors.name && (
                                 <p className="error">{errors.name}</p>
                              )}
                           </div>

                           <div className="tel-inp">
                              <input
                                 type="text"
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

                           <div className="radio-inp">
                              <div className="label-btns">
                                 <label>
                                    <input
                                       type="radio"
                                       name="type"
                                       value="online"
                                       checked={values.type === 'online'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                    />
                                    <div
                                       style={{
                                          backgroundColor: activeBtn.online && '#00bcff',
                                          outline: activeBtn.online && 'none',
                                       }}
                                       className="btn_ online-btn"
                                       onClick={() =>
                                          setactiveBtn({ online: true, ofline: false })
                                       }>
                                       Online
                                    </div>
                                 </label>
                                 <label>
                                    <input
                                       type="radio"
                                       name="type"
                                       value="offline"
                                       checked={values.type === 'offline'}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                    />
                                    <div
                                       style={{
                                          backgroundColor: activeBtn.ofline && '#00bcff',
                                          outline: activeBtn.ofline && 'none',
                                       }}
                                       className="btn_ ofline-btn"
                                       onClick={() =>
                                          setactiveBtn({ online: false, ofline: true })
                                       }>
                                       Offline
                                    </div>
                                 </label>
                              </div>
                              {touched.type && errors.type && (
                                 <p className="error">{errors.type}</p>
                              )}
                           </div>

                           <SubmitBtn index="1" />
                        </form>
                     </div>
                  </div>
               )}
            </Formik>

            <div className="log_img_div">
               <AnimLogo />
            </div>
         </div>

         {messageModal && (
            <MessageModal
               txt={respTrialCourse?.massage}
               {...{ setMessageModal }}
               loading={loading}
            />
         )}
         <div className="resp-drop-down">
            {respDevCourses &&
               respDevCourses.map((el) => {
                  if (el.name === respDevCoursesData) {
                     return (
                        <div
                           div
                           className="resp-drop-down_itemId"
                           key={el.id}
                           onClick={() => handleClicke(el.id)}>
                           <div key={el.name} className="btn_div">
                              <div className="dv_button">
                                 <button>
                                    <img src={el.logo} /> <p>{el.name}</p>
                                 </button>
                                 <div className={`vector_img ${item === el.id ? 'rotate' : ''}`}>
                                    <img src={vector} alt="" />
                                 </div>
                              </div>
                              <p>{el.description}</p>
                           </div>

                           <div
                              className="dropUL"
                              style={{ display: item === el.id ? 'block' : 'none' }}>
                              {el.lessons.map((item, index) => (
                                 <div key={item.id} >
                                    <span>
                                       {index + 1}) {item.title}
                                    </span>
                                    <ul className="task_ul">
                                       {item.tasks.map((task) => (
                                          <li key={task.id}>{task.title}</li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                           </div>
                        </div>
                     );
                  }
                  return null;
               })}
         </div>
      </div>
   );
}

export default CourseRegistrationPage;
