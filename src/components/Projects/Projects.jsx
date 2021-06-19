import React from 'react'
import './Projects.css'
import DownArrow from '../DownArrow/DownArrow';
import { useTranslation } from 'react-i18next';



const Projects = () => {
const { t } = useTranslation();

    return (
        <div className="projects-container" name="projects">

        <section className="projects-section">
        <div className="projects__title">
            <h1>{t("projects.title")}</h1>
            <p> {t("projects.subtitle")}</p>
        </div>
        <div className="imgs__container">
            <div className="img__container"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                <a href="https://www.monetiza.mx" target="_blank" rel="noopener noreferrer">
                <div className="front">
                    <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623794826/Projects/monetiza.svg" loading="lazy" title="Monetiza Mx" alt="Monetiza" />
                </div>
                </a>
            </div>
            <div className="img__container"
                data-aos="fade-down"
                data-aos-delay="600"
            >
                <a href="https://buscarancho.com" target="_blank" rel="noopener noreferrer">
                    <div className="front">
                        <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623790150/Projects/buscarancho.svg" loading="lazy" title="Busca Rancho" alt="Busca Rancho" />
                    </div>
                </a>
            </div>
            <div className="img__container"
                data-aos="fade-left"
                data-aos-delay="800"
            >
                <a href="https://overflysports.com" target="_blank" rel="noopener noreferrer">


                <div className="front">
                <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623798167/Projects/usnjtz2048ephwslv0hb.svg" loading="lazy" alt="Overfly Sports" title="Overfly Sports" />
                   
                </div>
                </a>
            </div>
            <div className="img__container"
                data-aos="fade-right"
                data-aos-delay="200"
            >
                <a href="https://susyarambula.com" target="_blank" rel="noopener noreferrer">
                <div className="front">
                    <img src="https://res.cloudinary.com/eduardocloud/image/upload/v1623798313/Projects/sabysusy.svg" loading="lazy" alt="Susy Arámbula" title="Sa by SusyArámbula" />
                </div>
                </a>
            </div>
             <div className="img__container"
                data-aos="zoom-out"
                data-aos-delay="1000"
             >
                <a href="https://andromedajoyeria.mx/inicio" target="_blank" rel="noopener noreferrer">
                <div className="front">
                    <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623823218/Projects/andromeda.svg" alt="Andromeda joyería" />  
                </div>
                </a>
            </div>
            <div className="img__container"
                data-aos="fade-left"
                data-aos-delay="900"
            >
                <a href="https://inmobiliarianieblas.com" target="_blank" rel="noopener noreferrer">
                <div className="front">
                    <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623798315/Projects/nieblas.svg" alt="inmobiliaria nieblas" />  
                </div>
                </a>
            </div>
            <div className="img__container"
               
            >
                <a href="https://sunwire.com.mx" target="_blank" rel="noopener noreferrer">
                <div className="front">
                        <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623798314/Projects/sunwire.svg" alt="sunwire" />
                </div>
                </a>
            </div>
        </div>
       
      
        </section>
        <DownArrow container={"contact"} offset={20} />

    </div>
    )
}

export default Projects