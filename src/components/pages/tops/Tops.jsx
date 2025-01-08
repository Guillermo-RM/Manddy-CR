import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import {tops} from '../../../logic/data/products'
import style from './Tops.module.scss'
import PageStore from '../../layout/pageStore/PageStore'


export default function Tops() {
  return (
    <>
      <Navbar/>

      <div className={`d-flex justify-content-center ${style['info-container']}`}>

        <div className={`col-sm-7 ${style['info']}`}>
            <h1>Tops Tejidos Personalizados</h1>
            <p>Descubre nuestra colección de tops tejidos a mano, donde la moda se encuentra con la creatividad y el arte. En Manddy CR, cada prenda es cuidadosamente elaborada para ofrecerte piezas únicas que destacan tu personalidad y te hacen sentir especial.</p>
            <p className='text-center fs-2 color-primary-300'>Con envíos <span className='text-success fw-bold'>GRATIS</span> a todo el país</p>
        </div>

      </div>


      <PageStore products={tops}/>

      <div className={`py-3 ${style['description-container']}`}>
        <div className='container col-sm-7'>  
          <h2 className='color-primary-250'>Tops tejidos Personalizados</h2>
          <p >Luce increíble con nuestra colección de tops tejidos a mano. Elige entre diseños modernos y colores vibrantes para destacar en cualquier ocasión. Cada prenda está hecha con hilos de calidad, asegurando comodidad y estilo.</p> 
          <p className='fw-bold color-primary-300 fs-3'>Personalízalo según tu preferencia para que refleje tu personalidad.</p>
        </div>
      </div>

      <Footer/>
    </>
  )
}
