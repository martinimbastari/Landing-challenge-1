import React from 'react'
import style from './header.module.css'
import foto from '../assets/image-hero-desktop.png'
import databiz from '../assets/client-databiz.svg'
import audiophile from '../assets/client-audiophile.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'

export default function Header() {
  return (
    <div className={style.contenedorHeader}>
        <div className={style.contenedorInfo}>
            <h2>Make <br/> remote work</h2>
            <p>Get your team in sync, no matter your location. <br/>
            Streamline processes, create team rituals, and watch productivity soar.</p>
            <button>Learn more</button>
            <div className={style.contenedorClientes}>
                <img src={databiz}/>
                
                <img src={audiophile}/>
                <img src={meet}/>
                <img src={maker}/>
            </div>
        </div>
        <div className={style.contenedorImg}>
            <img src={foto}/>
        </div>
    </div>
  )
}
