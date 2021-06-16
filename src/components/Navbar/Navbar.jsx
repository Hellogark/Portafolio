import React, { useState,useEffect} from 'react'
import './Navbar.css';
import { useTranslation } from 'react-i18next'
import  { Link } from "react-scroll";
import {useDispatch, useSelector} from 'react-redux'
import { changeClass } from '../../redux/colorDuck';
const Navbar = () => {
    const dispatch = useDispatch();
    const {navColors} = useSelector(store => store);
    const { t, i18n } = useTranslation();
    const [responsiveNavState, setResponsiveNavState] = useState(false);



    useEffect(() => {
        const prev = navColors.state && navColors.state.bgClass  ? navColors.state.bgClass : null;
        const next = navColors.bgClass;
        let nav = document.getElementById("nav");
        let navList = document.getElementById("listaNav");
        if(!prev){
            nav.classList.add(next);
            navList.classList.add(next);
        } else {
            nav.classList.remove(prev);
            nav.classList.add(next);
            navList.classList.remove(prev);
            navList.classList.add(next);
        }
    }, [navColors])

    const selectLanguageHandler = (language) => {
            i18n.changeLanguage(language);
    } 
    const scrollSection = ( bgClass, dispatch) => {
        dispatch(changeClass(bgClass));

    }

    const changeNavbarState = () => {
        let ham = document.getElementById("ham");
        ham.style.pointerEvents = "none";
        let navList = document.getElementById("listaNav");
        if(!responsiveNavState) {
            ham.classList.add("ham-active");
            navList.classList.add("openNav");
            document.documentElement.style.setProperty('--display-nav', 'flex');
            setResponsiveNavState(true);
            ham.style.pointerEvents = "auto";
        } else {
           closeNav();
        }
    }

    const closeNav = () => {
        let ham = document.getElementById("ham");
        let navList = document.getElementById("listaNav");
        ham.classList.toggle("ham-active");
        navList.classList.add("closedNav");
        navList.classList.remove("openNav");
        ham.classList.add("ham-inactive");
        ham.classList.remove("ham-active");
        setTimeout(() => {
            document.documentElement.style.setProperty('--display-nav', 'none');
            ham.classList.remove("ham-inactive");
            ham.classList.remove("ham-active");
            setResponsiveNavState(false);
            ham.style.pointerEvents = "auto";
        }, 700);
    }

    return (
        <header className="header">
            <nav className="nav" id="nav">
                <ul className="listaNav" id="listaNav">
                    <li className="listItem" >
                        <Link
                            onClick={() =>  {scrollSection( 'bg__nav__home', dispatch );closeNav();} }
                            onSetActive={() => scrollSection('bg__nav__home', dispatch )}
                            offset={-50}
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}><span>{t("home")}</span> </Link>        
                    </li>

                    <li className="listItem"  >
                        <Link
                        onClick={() =>  {scrollSection( 'bg__nav__about', dispatch );closeNav();}} 
                        onSetActive={() => scrollSection('bg__nav__about', dispatch )}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("about")}</span>    </Link></li>

                    <li className="listItem"  >
                        <Link
                        onClick={() => {scrollSection( 'bg__nav__projects', dispatch );closeNav();} }
                        onSetActive={() => scrollSection('bg__nav__projects', dispatch )}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("projects")}</span> </Link>                        
                    </li>

                    <li className="listItem"   >
                    <Link
                        onClick={() => {scrollSection('bg__nav__contact', dispatch );closeNav();} }
                        onSetActive={() => scrollSection('bg__nav__contact', dispatch )}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("contact")}</span>  </Link>
                    </li>
                    <div className="listItem"><span onClick={() => selectLanguageHandler('en') }>EN</span><span style={{margin: '0 10px'}}>|</span><span  onClick={ () => selectLanguageHandler('es') } >ES</span></div>
                </ul>
                <div className="ham-container" id="ham" onClick={changeNavbarState}>
                    <span className="ham-line"></span>
                    <span className="ham-line"></span>
                    <span className="ham-line"></span>
                </div>
            </nav>
        </header>
    )

}


export default Navbar
