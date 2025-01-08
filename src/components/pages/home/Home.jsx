import styles from './Home.module.scss'
import Navbar from '../../layout/navbar/Navbar';
import Footer from '../../layout/footer/Footer'
import ProductsPresentation from '../../layout/productsPresentation/ProductsPresentatio';
import Card from '../../layout/card/Card';

import { itemsPresentation, someProducts } from '../../../logic/data/info';
import { itemOscillation, lateralEntry } from '../../../logic/gsap';
import { Link } from 'react-router-dom';

function Home () {

    return(
        <>

        <Navbar/>
  
        {/* presentation start */}
        <section className='border pb-5'>
          <h1 className='color-primary-300 m-0'>Regalos Tejidos Costa Rica</h1>
          <div className='bg-primary-base'> 
            <ProductsPresentation
              prueba={itemsPresentation}
              itemOscillation={itemOscillation}
              lateralEntry={lateralEntry}
            />
          </div>
        </section>
        {/* presentation start */}
  
        {/* cards start */}
        <section className={`${styles['product-container']} border`}>
          <div className='pt-2 pb-3'>
            <p className='text-center font-text fs-1'>¡Antójate con algunos regalitos de nuestro arte en crochet!</p>
            <h3 className='text-center color-primary-300'>¿Cuál deseas encargar?</h3>
          </div> 
  
          <div className={`d-flex my-3 gap-1 flex-wrap justify-content-evenly ${styles['cards-presentation']}`}>
            {someProducts.map( item => (
              <Card
                type={true}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>
        {/* cards end */}
  
        {/* about start */}
        <section className={`${styles['about-container']} pt-5 pb-3`}>
  
          <div className={`${styles['info-container']} container`}>
            
            <div className='col-sm-6 d-flex flex-column justify-content-center'>
  
              <p className={styles['text-about']}>¡Un poco sobre mi!</p>
              <p className={styles['text-title']}>Soy una emprendedora y creadora de Manddy CR</p>
              <p className={styles['text-presentation']}>En Manddy CR, te llevo la magia del tejido artesanal a cada rincón de Costa Rica. soy apasionada por crear detallitos únicos, tiernos y llenos de color que marcan la diferencia en cada ocasión especial.</p>
              <Link to={'/about'} className={`${styles['button-about']} w-50`}>Sobre Maddy</Link>
  
            </div>
  
            <div className='col-sm-6 mt-4 d-flex justify-content-center'>
              <img src="img/pages/about.png" alt="foto de la creadora de Manddy CR" loading="lazy"/>
            </div>
  
          </div>
  
  
        </section>
        {/* about end */}

        <Footer/>
      </>
    )
}

export default Home;


