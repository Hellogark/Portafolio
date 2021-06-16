import React from 'react'
import './About.css'
import DownArrow from '../DownArrow/DownArrow';

import { useTranslation } from 'react-i18next'

const About = () => {
const { t, i18n } = useTranslation();
return (
<div className="about-container" name="about">

    <section className="about-section">

        <div className="img-container">
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
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033257/IconsStack/Angular_logo.svg.png" alt="Angular"  />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/ionic.png" alt="Ionic"  />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/sails.png" alt="sails js"  />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033258/IconsStack/mysql.png" alt="mysql" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1> {t("about.h1.learning")} </h1>

                        <div className="grid__container">
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623043098/IconsStack/react.png" alt="react" />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623034046/IconsStack/c.png" alt="C#"  />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033255/IconsStack/netcore.svg.png" alt="NetCore"  />
                            </div>
                            <div className="grid-item">
                                <img loading="lazy" src="https://res.cloudinary.com/eduardocloud/image/upload/v1623033257/IconsStack/sqlServer.png" alt="sqlServer"  />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        <DownArrow container={"projects"} offset={20} />
</div>
)
}

export default About

