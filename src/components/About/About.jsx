import React, {useEffect} from 'react'
import './About.css'
import DownArrow from '../DownArrow/DownArrow';
import * as AOS from 'aos';
import { useTranslation } from 'react-i18next'

const About = () => {
const { t } = useTranslation();
useEffect(() => {
    AOS.init();
  }, [])
return (
<div className="about-container" name="about">

    <section className="about-section">

        <div className="img-container"
            data-aos="flip-left"
        >
            <img className="profilePic" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623027291/profilePic.png" loading="lazy" alt="Profile" title="Profile Image" />
        </div>
        <div className="text-container">
            <div className="about__me__container">
                <h1>About me</h1>
            </div>
            <div className="info__row">
                <div className="paragraph__1">
                    <h3> {t("about.h3.1")} </h3>
                    <h3> {t("about.h3.2")} </h3>
                    <h3> {t("about.h3.3")} </h3>
                    <h3> {t("about.h3.4")} </h3>   
                </div>
                <div className="stack__container">
                    <div className="div__grid__container">

                        <h1> {t("about.h1.mystack")} </h1>
                        <div className="grid__container">
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="200">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033257/IconsStack/Angular_logo.svg.png" alt="Angular"  />
                            </div>
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="400">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/ionic.png" alt="Ionic"  />
                            </div>
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="600">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/sails.png" alt="sails js"  />
                            </div>
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="1200">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033258/IconsStack/mysql.png" alt="spring" />
                            </div>
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="800">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1679256926/IconsStack/j66d15rlcoxkhayjfxo4.png" alt="mysql" />
                            </div>
                            <div className="grid-item"
                                data-aos="fade-down"
                                data-aos-delay="1000">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1679256892/IconsStack/abxqsrywj1hrteuimbhy.png" alt="postgres" />
                            </div>
                        </div>
                    </div>

{/*                     <div>
                        <h1> {t("about.h1.learning")} </h1>

                        <div className="grid__container"
                                data-aos="fade-up"
                                data-aos-delay="200"
                        >
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623043098/IconsStack/react.png" alt="react" />
                            </div>
                            <div className="grid-item"
                                    data-aos="fade-up"
                                data-aos-delay="400"
                        >
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623034046/IconsStack/c.png" alt="C#"  />
                            </div>
                            <div className="grid-item"
                                    data-aos="fade-up"
                                data-aos-delay="600"
                        >
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/netcore.svg.png" alt="NetCore"  />
                            </div>
                            <div className="grid-item"
                                    data-aos="fade-up"
                                data-aos-delay="800"
                        >
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033257/IconsStack/sqlServer.png" alt="sqlServer"  />
                            </div>
                        </div>
                    </div> */}
                </div>
                
            </div>
        </div>
    </section>
        <DownArrow container={"projects"} offset={20} />
</div>
)
}

export default About

