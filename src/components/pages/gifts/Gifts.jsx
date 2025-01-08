import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import style from './Gifts.module.scss'
import { gifts } from '../../../logic/data/products'
import PageStore from '../../layout/pageStore/PageStore'


export default function Gifts() {
  return (
    <>
      <Navbar/>

      <div className={`d-flex justify-content-center ${style['info-container']}`}>

        <div className={`col-sm-8 ${style['info']}`}>
            <h1>Regalos Tejios y Personalizados</h1>
            <p>En Manddy CR, sabemos que los mejores regalos son aquellos que vienen cargados de significado y dedicación. Nuestra selección de regalos tejidos a mano es perfecta para demostrar cariño y sorprender a quienes más quieres.</p>
            <p className='text-center fs-2 color-primary-300'>Con envíos <span className='text-success fw-bold'>GRATIS</span> a todo el país</p>
        </div>

      </div>

      <PageStore products={gifts}/>

      <div className={`py-3 ${style['description-container']}`}>
        <div className='container col-sm-7'>  
          <h2 className='color-primary-250'>Regalos tejidos Personalizados</h2>
          <p >Sorprende con regalos tejidos personalizados que alegran cada espacio. Desde rosas tejidas hasta sombreros originales, cada pieza refleja dedicación y creatividad. Perfectos para aniversarios, celebraciones y fechas importantes.</p> 
          <p className='fw-bold color-primary-300 fs-3'>¡Haz que tus regalos sean inolvidables!</p>
        </div>
      </div>

      <Footer/>
    </>
  )
}
