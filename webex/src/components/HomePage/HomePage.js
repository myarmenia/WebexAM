import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Header from '../Header/Header'
import './HomePage.css'
import WebexInfo from '../WebexInfo/WebexInfo'
import ToolsInfo from '../ToolsInfo/ToolsInfo'
import OurAdvantages from '../OurAdvantages/OurAdvantages'
import Services from '../Services/Services'
import CreateWebsitesAndMobileApp from '../CreateWebsitesAndMobileApp/CreateWebsitesAndMobileApp'
import VideoCoursesSection from '../VideoCoursesSection/VideoCoursesSection'
import SlideSection from '../SlideSection/SlideSection'
import MosaicGrid from '../MosaicGrid/MosaicGrid'
import MosaicGridSlide from '../MosaicGridSlide/MosaicGridSlide'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { getHomePage } from '../../store/slices/HomePageSlice/HomePageApi'
import ModelForHome from '../ModelForHome/ModelForHome'



function HomePage() {
const [activeProject, setActiveProject] = useState(false)

const dispatch = useDispatch()

function handleResize(){

  if(window.innerWidth <= 720){
    setActiveProject(true)
  }
  else{
    setActiveProject(false)
  }
};


  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    return ()=> {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  

  useEffect(()=>{
    dispatch(getHomePage()) 
  },[]) 
  
  return (
    <>
     <Helmet>
      <title>վեբ ծրագրավորման դասընթացներ, CRM/ERP/Unity/iOS/Android/web/PHP/Laravel/ReactJS ծրագրավորում/HomePage</title>
      <meta name="description" content="Our services include, Portfolio websites, e-commerce websites, information portals, turnkey creation for online store, a personal website or a blog."/>
      <meta name="keywords" content="website, development, promotion, service and support, SEO, HTML, CSS, javaScript, 3d, unity, games, mobile, aplication, treinig, search, engine, optimization, internet advertising, design, builder, react, redux, informative,razrabotka, site, разработка, веб студия, заказать, создание, сайтов, продвижение, оптимизация, реклама, дизайн, kayqi patrastum, tsragravorum, armenia."/>
      <link rel="canonical" href="http://localhost:3000/am"/>
     </Helmet>
      
     <div className='home-page'>
          <div className='container'>
              <Header/>
              <WebexInfo/>
              <ToolsInfo/>
              <OurAdvantages/>
              <Services/>
              <ModelForHome/>
              <CreateWebsitesAndMobileApp/>
              <VideoCoursesSection/>
              <SlideSection/>
              {activeProject ? <MosaicGridSlide/> : <MosaicGrid/>}
              
          </div>
      </div>
    
    </>
  )
}

export default HomePage