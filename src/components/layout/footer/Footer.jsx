import style from './Footer.module.scss'
import { Link } from 'react-router-dom';

function Footer () {

    return(
        <footer className=' d-flex flex-wrap justify-content-center py-4'>
            <div className={`${style['text-container']} col-sm-6`}>
                <h2>Manddy Crochet</h2>

                <p className={style['description']}>Regalos tejidos únicos y personalizados, hechos a mano con amor en Costa Rica.
                ¡Transformamos tus ideas en creaciones llenas de magia y ternura!</p>

                <p className={style['adress']}>San Ramón, Alajuela</p>

                <p className={style['number']}>+506 8080 8080</p>

            </div>

            <div className={`${style['seo-container']} col-sm-6`}>

                <div className={`${style['links-container']} py-5`}>
                    <h3 className=''>Enlaces</h3>
                    <div className='d-flex flex-column'>
                        <Link className={style['link']} to="/">Inicio</Link>
                        <Link className={style['link']} to="/amigurumis">Amigurumis</Link>
                        <Link className={style['link']} to="/tops">Topcitos</Link> 
                        <Link className={style['link']} to="/gifts">Regalos</Link> 
                        <Link className={style['link']} to="/keyrings">Llaveritos</Link> 
                        <Link className={style['link']} to="/about">Nosotros</Link> 
                    </div>
                </div>

                <div className="map-container">
                    <div className="map-header">
                        <h5 className="text-center color-primary-50">Somos de San Ramon</h5>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.404982210874!2d-84.4794329910162!3d10.090789816178523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa044e377d3afdb%3A0x25fec024d645683a!2sProvincia%20de%20Alajuela%2C%20San%20Ram%C3%B3n!5e0!3m2!1ses!2scr!4v1736100562051!5m2!1ses!2scr"
                        title="Google Maps"
                        className="map-frame w-100"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </footer>
    )
}

export default Footer;