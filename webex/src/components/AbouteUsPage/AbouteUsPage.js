import React, { useEffect, useState } from 'react'
import './AbouteUsPage.css'
import { bottomLine } from '../../images/images'
import { useTranslation } from 'react-i18next'
import { co_workers_data, ourt_teem_data } from '../../data'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
import { useSelector } from 'react-redux'
import { selectOrder } from '../../store/slices/OrderSlice/OrderSlice'
import OrderModal from '../OrderModal/OrderModal'
import MessageModal from '../MessageModal/MessageModal'
function AbouteUsPage() {

    const [openOrderModal, setOpenOrderModal] = useState(false)
    const [messageModal, setMessageModal] = useState(false)
     const respOrder = useSelector(selectOrder)

    const { t, i18n } = useTranslation()

    


    useEffect(() => {
        document.body.style.overflow = openOrderModal ? 'hidden' : 'auto';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [openOrderModal]);

    return (
        <div className='aboute-us-page'>
            <div className='abote_us_order_modal_btn' onClick={()=> setOpenOrderModal(true)}>{t('order_now')}</div>
            <div className='aboute-us-top-div'>
                <div className='container'>
                    <h2>{t('abouteUs_Header.0')}</h2>
                </div>
            </div>
            <div className='container'>
                <div className='aboute-us-info-block'>
                    <div className='aboute-us-info-block-title'>
                        <h4>{t('abouteUS_info_block.0')}</h4>
                        <img src={bottomLine} alt="img" />
                    </div>
                    <p>{t('abouteUS_info_block.1')}</p>

                    <div className="aboute-us-info-block-training">
                        <div>
                            <h5>{t('abouteUs_training.0')}</h5>
                            <p>{t('abouteUs_training.1')}</p>
                            <ul className='training-ul'>
                                <li>{t('abouteUs_training.2')}</li>
                                <li>{t('abouteUs_training.3')}</li>
                                <li>{t('abouteUs_training.4')}</li>
                                <li>{t('abouteUs_training.5')}</li>
                                <li>{t('abouteUs_training.6')}</li>
                                <li>{t('abouteUs_training.7')}</li>
                                <li>{t('abouteUs_training.8')}</li>
                                <li>{t('abouteUs_training.9')}</li>
                                <li>{t('abouteUs_training.10')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='our-partners'>
                    <div className='our_partner_title'>
                        <h4>{t('abouteUs_ourPartnersTitle')}</h4>
                        <img src={bottomLine} alt="img" />
                    </div>
                    <ScrollerComponent/>
                </div>



                <div className='our_teem'>
                    <div className='our_teem_title'>
                        <h4>{t('our_teem_title')}</h4>
                        <img src={bottomLine} alt="img" />
                    </div>
                     <div className='our_teem_items'>
                        {
                            ourt_teem_data.map(el =>
                                <div key={el._id} className='our_teem_item'>
                                    <img src={el.img} alt="" />
                                    <h5>{el.name}</h5>
                                    <div>
                                        <span>{el.stack}</span>
                                        <span>{el.experience}</span>
                                    </div>
                                </div>
                            )
                        }
                     </div>
                </div>
            </div>
            {openOrderModal && <OrderModal {...{setOpenOrderModal, setMessageModal}}/>}
            {messageModal && <MessageModal txt={respOrder?.data.message} {...{setMessageModal}}/>}
        </div >
    )
}

export default AbouteUsPage