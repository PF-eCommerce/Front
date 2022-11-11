
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from './img/btn-facebook.png'
import instagram from './img/btn-instagram.png'
import twitter from './img/btn-twitter.png'
import logo from "../../assets/images/Trés_bien__2_-removebg-preview.png"


import './Footer.css'


export default function Footer() {

    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className="footer__column">
                        <h4>Info</h4>
                            <li className='footer__li'></li>
                            <li className='footer__li'><Link to='/' className='footer__link'>direcciones</Link></li>
                            <li className='footer__li'><Link to='/' className='footer__link'>Ver Mapa Sucursales</Link></li>

                            <li className='footer__li'><Link to='/faqs' className='footer__link'>FAQs</Link></li>
                    </div>

                    <div className="footer__column">
                        <h4>Usuario</h4>
                            <li className='footer__li'><Link to='/account/profile' className='footer__link'>Su cuenta</Link></li>
                            <li className='footer__li'><Link to='' className='footer__link'>Tus ordenes</Link></li>
                    </div>

                    <div className="footer__column">
                        <h4>Dejanos ayudarte</h4>
                            <li className='footer__li'><Link to='' className='footer__link'>Tarifas y políticas de envío</Link></li>
                            <li className='footer__li'><Link to='' className='footer__link'>Devoluciones y reemplazos</Link></li>
                    </div>

                    <div className="footer__column">
                        <Link to='/'><img src={logo} alt="" className='logo__img'/></Link>
                        <h4>¡Visita nuestras redes sociales!</h4>
                        <div className='footer_socials'>
                            <li className='footer__li'><a href='https://www.instagram.com/' target="_blank"><img className='footer__img' src={instagram}/></a></li>
                            <li className='footer__li'><a href='https://www.facebook.com/' target="_blank"><img className='footer__img' src={facebook}/></a></li>
                            <li className='footer__li'><a href='https://twitter.com/' target="_blank"><img className='footer__img' src={twitter}/></a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};