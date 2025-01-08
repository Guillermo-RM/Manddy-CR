import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import { keyrings } from '../../../logic/data/products'
import style from './Keyrings.module.scss'
import PageStore from '../../layout/pageStore/PageStore'


export default function Keyrings() {
  return (
    <>
      <Navbar/>

      <div className={`d-flex justify-content-center ${style['info-container']}`}>

        <div className={`col-sm-7 ${style['info']}`}>
            <h1>Llaveritos Tejidos Personalizados</h1>
            <p>En Manddy CR, creemos que los pequeños detalles hacen la diferencia. Nuestros llaveros tejidos a mano son más que simples accesorios: son piezas únicas y personalizadas que puedes llevar contigo a donde vayas.</p>
            <p className='text-center fs-2 color-primary-300'>Con envíos <span className='text-success fw-bold'>GRATIS</span> a todo el país</p>
        </div>
      </div>

      <PageStore products={keyrings}/>

      <div className={`py-3 ${style['description-container']}`}>
        <div className='container col-sm-7'>  
          <h2 className='color-primary-250'>Llaveros tejidos Personalizados</h2>
          <p >Los llaveros tejidos son el complemento perfecto para decorar mochilas, bolsos y llaves con estilo. Elige entre diseños como animales, figuras temáticas y opciones personalizadas. Ideales como detalles únicos para amigos o souvenirs.</p> 
          <p className='fw-bold color-primary-300 fs-3'>Ideales como detalles únicos para amigos o souvenirs</p>
        </div>
      </div>

      <Footer/>
    </>
  )
}
