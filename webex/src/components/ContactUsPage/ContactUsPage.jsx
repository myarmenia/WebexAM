import React, { useState } from 'react'
import './ContactUsPage.css'
import { Formik } from 'formik'
import SubmitBtn from '../SubmitBtn/SubmitBtn'
import * as yup from 'yup';
import TelUs from '../TelUs/TelUs'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { postFeedBack } from '../../store/slices/FeedbackSlice/FeedbackApi'
import MessageModal from '../MessageModal/MessageModal';
import { selectFeedBAck, selectFeedBAckLoading } from '../../store/slices/FeedbackSlice/FeedbackSlice';

function ContactUsPage() {

    const [messageModal, setMessageModal] = useState(false)

    const respFeedBack = useSelector(selectFeedBAck)
    const loading = useSelector(selectFeedBAckLoading)
    
    const {t, i18n} = useTranslation()

    const dispatch = useDispatch()

    const  validationSchema = yup.object().shape({
        name: yup.string().required(t('validation_reg_log.' + '0')),
        email: yup.string().email(t('validation_reg_log.' + '1')).required(t('validation_reg_log.' + '0')),
        message: yup.string()
        .required(t('validation_reg_log.' + '0')),
    })


    function handleLogSub(e,handleSubmit, isValid , dirty) {
        e.preventDefault()
            handleSubmit()
            
            if (e.target[0].value && e.target[1].value && e.target[2].value) {
                const feedBackObj = {
                    name: e.target[0].value,
                    email: e.target[1].value,
                    message: e.target[2].value
                }
    
                dispatch(postFeedBack(feedBackObj))
    
                setMessageModal(true)
            }
    }


    
    return (
        <div className='contuct-us-page'>

            <div className='contact-us-top-div'>
                <div className='container'>
                    <h2>{t('contact_us_title.0')}</h2>
                </div>
            </div>

            <div className='container'>
                    <div className='feedback_map_block'>
                    <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}

            onSubmit={(values, {resetForm})=>{
               
            
                resetForm()
            }}

            validateOnBlur

            validationSchema={validationSchema}
        >
        
        {
            ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
                <div className="feedback">
                            <form className="feedback-form"  onSubmit={(e)=>handleLogSub(e,handleSubmit, isValid, dirty)}>
                                <h4>{t('contact_us_title.1')}</h4>

                            <div className="name-inp">
                                <input type="text" name="name" placeholder={t('feedback.0')} value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                            </div>

                            <div className="email-inp">
                                <input type="email" name="email" placeholder={t('feedback.1')} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="message-inp">
                                <textarea  name="message" placeholder={t('feedback.2')} value={values.message} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.message && errors.message && <p className="error">{errors.message}</p>}
                            </div>

                            {/* <button className="reg-btn" disabled={!isValid || !dirty}>Registre</button> */}

                            <SubmitBtn index= "3"/>
                        </form>
                </div>
            )
        }
        </Formik>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.7073378246694!2d44.493651319745936!3d40.195670606292595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1372989f13%3A0x249c4e8abc0ba1f6!2s79%20Marshal%20Baghramyan%20Ave%2C%20Yerevan%200033!5e0!3m2!1sru!2sam!4v1706089718751!5m2!1sru!2sam" width={650} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>


                </div>

                <TelUs/>

                {messageModal && <MessageModal txt={respFeedBack?.data?.message} {...{setMessageModal}} loading={loading}/>}
        </div>
    )
}

export default ContactUsPage