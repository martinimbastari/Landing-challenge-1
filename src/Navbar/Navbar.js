import React, {useState}from 'react'
import logo from '../assets/logo.svg'
import style from  './navbar.module.css'
import arrowDown from '../assets/icon-arrow-down.svg';
import iconMenu from '../assets/icon-menu.svg'
import iconClose from '../assets/icon-close-menu.svg'
import calendar from '../assets/icon-calendar.svg'
import planning from '../assets/icon-planning.svg'
import reminders from '../assets/icon-reminders.svg'
import todo from '../assets/icon-todo.svg'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className={style.nav}>
        <div className={style.contenedorImg}>
            <img src={logo}/>    
        </div>
        <ul className={style.menuHorizontal}>
            <li><a>Features <img src={arrowDown}/></a>
            <ul className={style.menuVertical1}><li><a><img src={todo}/> Todo List</a></li>
            <li><a><img src={calendar}/> Calendar</a></li>
            <li><a><img src={reminders}/> Reminders</a></li>
            <li><a><img src={planning}/> Plannings</a></li></ul>
            
            </li>
            <li><a>Company <img src={arrowDown}/></a>
            <ul className={style.menuVertical2}>
            <li><a>History</a></li>
            <li><a>Our Team</a></li>
            <li><a>Blog</a></li>
            </ul>
            
            </li>
            <li><a>Careers</a></li>
            <li><a>About</a></li>
        </ul>
        <div className={style.contenedorBtn}>
            <button className={style.btnLogin}>Login</button>
            <button className={style.btnRegister}>Register</button>
        </div>
        <div className={style.mobileMenu}>
        <img src={iconMenu} onClick={() =>setToggleMenu(true)}  fontSize={25} color='black' />
        {toggleMenu && (
                <div className={style.menuOverlay}>
                <img src={iconClose} onClick={() =>setToggleMenu(false)} className={style.btnClose}/>
                <ul className={style.mobileMenuList}>
                <li><a>Features &#8595;</a>
                <ul className={style.mobileMenuListDesplegable1}><li><a><img src={todo}/> Todo List</a></li>
                <li><a><img src={calendar}/> Calendar</a></li>
                <li><a><img src={reminders}/> Reminders</a></li>
                <li><a><img src={planning}/> Plannings</a></li></ul>
                
                </li>
                <li><a>Company &#8595;</a>
                <ul className={style.mobileMenuListDesplegable2}>
                <li><a>History</a></li>
                <li><a>Our Team</a></li>
                <li><a>Blog</a></li>
                </ul>
                
                </li>
                <li><a>Careers</a></li>
                <li><a>About</a></li>
                <div className={style.contenedorBtnMobile}>
                <button className={style.btnLoginMobile}>Login</button>
                <button className={style.btnRegisterMobile}>Register</button>
            </div>
            </ul>
                </div>
        )}
            
        
        </div>
    </div>
    
  )
}
