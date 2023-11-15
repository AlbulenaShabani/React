import React from 'react'
import Header from '../components/Header/Header'
import Section from '../components/section/section'
import Reklam from '../components/Reklam/Reklam'
import Features from '../components/Features/Features'
import AboutCompany from '../components/aboutCompany/aboutCompany'
import ServiceAboutConsulting from '../components/ServiceAboutConsulting/serviceAboutConsulting'
import BusinessConsultingAgency from '../components/BusinessConsultingAgency/bussinesConsultingAgency'  
import GlobalProjekts from '../components/GlobalProjekts/globalProjekts'  
import TeamTestimonial from '../components/TeamTestimonial/teamTestimonial'
import ArticleNews from '../components/ArticleNews/articleNews'
import GetNews from '../components/GetNews/getNews'
import Footer from '../components/Footer/footer'


const home = () => {
  return (
    <>
        
        <Header />
        <Section />
        <Reklam />
        <Features />
        <AboutCompany />
        <ServiceAboutConsulting />
        <BusinessConsultingAgency />
        <GlobalProjekts />
        <TeamTestimonial />
        <ArticleNews />
        <GetNews />
        <Footer />
    
    </>

  )
}

export default home