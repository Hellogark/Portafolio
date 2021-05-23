import React from 'react'
import './Navbar.css';
import { useTranslation } from 'react-i18next'
import { Link } from "react-scroll";
const Navbar = () => {
    const { t, i18n } = useTranslation()
    const selectLanguageHandler = (language) => {
            i18n.changeLanguage(language);
    } 

    return (
        <header className="header">
            <nav className="nav">
                <ul className="listaNav">
                    <li className="listItem">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            
                            duration={500}>{t("home")}</Link>        
                    </li>
                    <li className="listItem" >
                        <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}>{t("projects")}</Link>                        
                    </li>
                    <li className="listItem" >
                        <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}>{t("about")}</Link></li>
                    <li className="listItem" >
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>{t("contact")}</Link>
                    </li>
                    <div className="listItem"><span onClick={() => selectLanguageHandler('en') }>EN</span><span style={{margin: '0 10px'}}>|</span><span  onClick={ () => selectLanguageHandler('es') } >ES</span></div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
