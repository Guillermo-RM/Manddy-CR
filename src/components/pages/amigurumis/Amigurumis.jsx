import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import PageStore from '../../layout/pageStore/PageStore'
import style from './Amigurumis.module.scss'
import { amigurumis } from '../../../logic/data/products'

export default function Amigurumis() {
  return ( 
    <>
      <Navbar/>

      <div id='ami' className={`d-flex justify-content-center ${style['info-container']}`}>

        <div className='col-sm-7'>
            <h1> Amigurumis Personalizados en Costa Rica - <span className='color-primary-250'>Manddy CR</span></h1>
            <p>Encuentra amigurumis tejidos a mano con temáticas personalizadas. Perfectos para regalos especiales en Costa Rica.</p>
            <p className='text-center fs-2 color-primary-300'>Con envíos <span className='text-success fw-bold'>GRATIS</span> a todo el país</p>
        </div>
      </div>

      <PageStore products={amigurumis}/> 

      <div className={`py-3 ${style['description-container']}`}>
        <div className='container col-sm-7'>  
          <h2 className='color-primary-250'>Amigurumis Personalizados</h2>
          <p >Nuestros amigurumis tejidos a mano son el regalo ideal para sorprender. Personaliza el color, tamaño y temática para que cada pieza sea única. Ya sea un animal tierno o un personaje temático, tenemos opciones para todas las ocasiones.</p> 
          <p className='fw-bold color-primary-300 fs-3'>¡Descubre nuestra magia tejida en Costa Rica!</p>
        </div>
      </div>

      <Footer/>
    </>
  )
}
