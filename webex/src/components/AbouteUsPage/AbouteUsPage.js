import React, { useEffect, useState } from 'react'
import './AbouteUsPage.css'
import { bottomLine } from '../../images/images'
import { useTranslation } from 'react-i18next'
import { co_workers_data, ourt_teem_data } from '../../data'
import ScrollerComponent from '../ScrollerComponent/ScrollerComponent'
function AbouteUsPage() {

    const { t, i18n } = useTranslation()

    // const [scrollPosition, setScrollPosition] = useState(0);

    // useEffect(() => {
    //     const scrollContainer = document.getElementById('scrollContent');

    //     const handleScroll = () => {
    //         setScrollPosition(scrollContainer.scrollLeft);
    //     };

    //     scrollContainer.addEventListener('scroll', handleScroll);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         scrollContainer.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // // Check if the scrollPosition has reached the end and reset to the beginning
    // useEffect(() => {
    //     const scrollContainer = document.getElementById('scrollContent');
    //     const containerWidth = scrollContainer.clientWidth;
    //     const contentWidth = scrollContainer.scrollWidth;

    //     if (scrollPosition >= contentWidth - containerWidth) {
    //         scrollContainer.scrollLeft = 0;
    //     }
    // }, [scrollPosition]);

    return (
        <div className='aboute-us-page'>
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
                        <h4>Our partners</h4>
                        <img src={bottomLine} alt="img" />
                    </div>
                    <ScrollerComponent/>
                </div>



                <div className='our_teem'>
                    <div className='our_teem_title'>
                        <h4>Our teem</h4>
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
        </div >
    )
}

export default AbouteUsPage