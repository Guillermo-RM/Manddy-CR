import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import style from './About.module.scss'
import Footer from '../../layout/footer/Footer'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Navbar/>

      <section className={`${style['about-manddy']}`}>

          <div className={style['about-manddy-info']}>
            <h2>Sobre Manddy CR</h2>
            <p>En Manddy CR, llevamos la magia del tejido artesanal a cada rincón de Costa Rica. Soy una emprendedora apasionada por crear productos únicos, tiernos y llenos de color que marcan la diferencia en cada ocasión especial.</p>

            <p>Mi misión es transformar el arte del crochet en regalos y detalles inolvidables que transmitan alegría, cariño y creatividad.</p>

            <div className='d-flex flex-wrap justify-content-evenly my-2 gap-2'>
              <Link to={'/amigurumis'} className={style['secondary']}>Ver Amigurumis</Link>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <img className='img-fluid' src="./img/collage/amigurumis-collage.webp" alt="collage de amigurumis" loading="lazy"/>
          </div>

      </section>

      <section className={`${style['unique']}`}>

          <div className={style['manddy-unique']}>
            <h2>¿Qué me diferencia?</h2>

            <ul>
              <li>
                <p><span>Personalización total:</span> Escoge los colores, diseños y temáticas que más te gusten. Queremos que cada creación sea tan especial como la persona que la recibe.</p>
              </li>
              
              <li>
                <p><span>Artesanía con alma:</span> Cada puntada está hecha con paciencia, cuidado y pasión por el detalle.</p>
              </li>

              <li>
                <p><span>Regalos para cualquier ocasión:</span>Ya sea para San Valentín, cumpleaños, Navidad o simplemente para sorprender a alguien especial, tenemos el detalle perfecto para ti.</p>
              </li>

            </ul>

            <div className='d-flex flex-wrap justify-content-evenly my-2 gap-2'>
              <Link to={'/keyrings'} className={style['secondary']}>Ver Llaveritos</Link>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <img className='img-fluid' src="./img/collage/keyrings-collage.webp" alt="colage de llaveros tejidos" loading="lazy"/>
          </div>

      </section>

      <section className={`${style['philosophy']}`}>

        <div className={style['philosophy-manddy']}>
          <h2>Nuestra Filosofía</h2>
            <p>Creemos en la importancia de lo hecho a mano y en el valor de los pequeños detalles. Nos inspira la idea de llevar ternura y belleza a los momentos más importantes de la vida, mientras apoyamos el talento artesanal local en Costa Rica.</p>

            <p className='mb-3'>En Manddy CR, no solo vendemos productos tejidos; creamos experiencias llenas de significado y amor.</p>

            <div className='d-flex flex-wrap justify-content-evenly my-2 gap-2'>
              <Link to={'/tops'} className={style['secondary']}>Ver Topcitos</Link>
            </div>
        </div>

        <div className='d-flex justify-content-center'>
          <img className='img-fluid' src="./img/collage/tops-collage.webp" alt="collage de tops tejidos" loading="lazy"/>
        </div>

      </section>

      <section className={`${style['contact-us']}`}>

        <div className={style['contact-info']}>
          <h2>Contacta con Nosotros</h2>
          <p>Te invitamos a ser parte de nuestra comunidad en Instagram, donde comparto mis creaciones, ideas de regalos y promociones exclusivas. ¡Únete a nosotros y descubre la magia del crochet con Manddy CR!</p>

            <div className='d-flex flex-wrap justify-content-evenly my-2 gap-2'>
              <a className={style['secondary']} href="https://www.instagram.com/manddy_cr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>Ir a Instagram</a>
              <Link to={'/gifts'} className={style['primary']}>Ver Regalitos</Link>
            </div>
        </div>

        <div className='d-flex justify-content-center'>
          <img className='img-fluid' src="./img/collage/gifts-collage.webp" alt="collage de regalos tejidos" loading="lazy"/>
        </div>

      </section>

      <Footer/>
    </>
  )
}