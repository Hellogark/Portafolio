import React, {useEffect} from 'react'
import './Contact.css'
import DownArrow from '../DownArrow/DownArrow';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';
import {useDispatch} from 'react-redux'
import { changeClass } from '../../redux/colorDuck';
import ScrollWatcher from 'scroll-watcher'
const Contact = () => {
const { t, i18n } = useTranslation();    
const dispatch = useDispatch();
const scrollSection = ( bgClass, dispatcher) => {
    dispatcher(changeClass(bgClass));
}
const downloadPdf = () =>{
    i18n.language === 'es' ? 
    saveAs("https://res.cloudinary.com/eduardocloud/image/upload/v1623808793/Media/EDUARDO-MORENO-CV-ES.pdf", "CV-Eduardo-Moreno")
    :
    saveAs("https://res.cloudinary.com/eduardocloud/image/upload/v1623808791/Media/Eduardo-Moreno-CV-EN.pdf", "Eduardo-Moreno-CV");
}
useEffect(() => {
    const scroll = new ScrollWatcher();
    window.innerWidth <= 768 ?
    scroll
  .watch(".contact-section")
  .on("enter:full", function(evt) {
    scrollSection('bg__nav__contact', dispatch )
  }) :  scroll
  .watch(".contact-section")
  .on("enter", function(evt) {
    scrollSection('bg__nav__contact', dispatch )
  });
}, [])
    return (
        <div className="contact-container" name="contact">
            <div>
                <h1 className="contact-title"> {t("contact.h1")} </h1>
            </div>
        <section className="contact-section">
        <div className="media-container">
            <div className="img-media">
                <a href="https://www.linkedin.com/in/edmolo/" target="_blank" rel="noopener noreferrer">
                    <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623808654/Media/linkdin-icon.svg" alt="Linkedin" title="linkedin" />
                </a>
            </div>
            <div className="img-media">
                <a href="mailto:eledmolo@gmail.com">
                    <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623808653/Media/mail-icon.svg" alt="" />
                </a>
            </div>
            <div className="img-media" onClick={downloadPdf}>
                <img  src="https://res.cloudinary.com/eduardocloud/image/upload/v1623808655/Media/cv-icon.svg" alt={t('contact.alts.cv')} title={t('contact.alts.cv')} />
            </div>
        </div> 
       
        <DownArrow start="toStart" container={"home"} offset={0} />
        </section>

    </div>
    )
}

export default Contact
