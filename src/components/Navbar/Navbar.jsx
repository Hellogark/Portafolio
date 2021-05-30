import React, { useEffect} from 'react'
import './Navbar.css';
import { useTranslation } from 'react-i18next'
import  { Link } from "react-scroll";
import {useDispatch, useSelector} from 'react-redux'
import { changeClass } from '../../redux/colorDuck';
const Navbar = () => {
    const dispatch = useDispatch();
    const {navColors} = useSelector(store => store);
console.log(navColors);
    const { t, i18n } = useTranslation();


    useEffect(() => {
        const prev = navColors.state && navColors.state.bgClass  ? navColors.state.bgClass : null;
        const next = navColors.bgClass;
        let nav = document.getElementById("nav");
        if(!prev){
            nav.classList.add(next);
        } else {
            nav.classList.remove(prev);
            nav.classList.add(next);
        }
    }, [navColors])

    useEffect(() => {
       
    },[])
    const selectLanguageHandler = (language) => {
            i18n.changeLanguage(language);
    } 

    return (
        <header className="header">
            <nav className="nav" id="nav">
                <ul className="listaNav">
                    <li className="listItem" >
                        <Link
                            onClick={() =>  scrollSection( 'bg__nav__home', dispatch )}
                            onSetActive={() => scrollSection('bg__nav__home', dispatch )}
                            offset={-50}
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}><span>{t("home")}</span> </Link>        
                    </li>

                    <li className="listItem"  >
                        <Link
                        onClick={() =>  scrollSection( 'bg__nav__about', dispatch )}
                        onSetActive={() => scrollSection('bg__nav__about', dispatch )}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("about")}</span>    </Link></li>

                    <li className="listItem"  >
                        <Link
                        onClick={() => scrollSection( 'bg__nav__projects', dispatch )}
                        onSetActive={() => scrollSection('bg__nav__projects', dispatch )}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("projects")}</span> </Link>                        
                    </li>

                    <li className="listItem"   >
                    <Link
                        onClick={() => scrollSection('bg__nav__contact', dispatch )}
                        onSetActive={() => scrollSection('bg__nav__contact', dispatch )}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}><span>{t("contact")}</span>  </Link>
                    </li>
                    <div className="listItem"><span onClick={() => selectLanguageHandler('en') }>EN</span><span style={{margin: '0 10px'}}>|</span><span  onClick={ () => selectLanguageHandler('es') } >ES</span></div>
                </ul>
            </nav>
        </header>
    )
}

const scrollSection = ( bgClass, dispatch) => {
    dispatch(changeClass(bgClass))
}

export default Navbar
