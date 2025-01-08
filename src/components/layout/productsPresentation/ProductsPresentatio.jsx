import { useState, useRef, useEffect } from 'react';
import styles from './ProductsPresentation.module.scss'
import { Link } from 'react-router-dom';
import { sendMessage } from '../../../logic/getProduct';

function ProductsPresentation ({prueba, itemOscillation, lateralEntry }) {

    const [currentItem, setCurrentItem] = useState(prueba[0])
    const imageAnimation = useRef(null);
    const nameAnimation = useRef(null);
    const priceAnimation = useRef(null);

    function changeItem( item ) {
        switch (item) {
            case 1 : 
                setCurrentItem(prueba[0]);
            break

            case 2 :
                setCurrentItem(prueba[1])
            break

            case 3 :
                setCurrentItem(prueba[2])
            break

            case 4 :
                setCurrentItem(prueba[3])
            break
        }
    }

    useEffect(() => {
        if (imageAnimation.current) {
            itemOscillation(imageAnimation.current);
        }
        lateralEntry(nameAnimation.current, -250, 0.5)
        lateralEntry(priceAnimation.current, -250, 0.6)
    }, [currentItem]);

    return(
        <div className={styles['principal-container']}>

            <div className={styles['name-container']}>
                <p ref={nameAnimation}> Amigurumi de {currentItem.name}</p>
            </div>

            <div className={styles['image-container']}>
                <img ref={imageAnimation} src={currentItem.img} alt={currentItem.alt} />
            </div>

            <div className={styles['description-container']}>
                <div>
                    <p className={styles['text-description']}>
                        ¡Elige tu diseño! Nuestros productos son:
                    </p>

                    <ul>
                        <li className='color-primary-300 fw-bold'>Hechos a mano y por encargo.</li>
                        <li className='color-primary-300 fw-bold'>Con envíos <span className='text-success fs-3'>Gratis</span> a todo el país.</li>
                        <li className='color-primary-300 fw-bold'>Totalmente personalizado.</li>
                    </ul>
                </div>

                <div>
                    <p className={styles['call']}>
                        ¡Haz tu pedido hoy y recibe algo hecho especialmente para ti!
                    </p>
                    <p ref={priceAnimation} className={styles['price']}>Con un valor de ₡{currentItem.price}</p>
                </div>
            </div>
            
            <div className={styles['buttons-container']}>
                <Link to={`/${currentItem.route}`} className={`${styles['button-primary']} w-100 `}>Ver Más</Link>
                <button onClick={()=> sendMessage(currentItem)} className={`${styles['button-secondary']} w-100 `}>Encargar</button>
            
            </div>

            <div className={styles['miniatures-container']}>
                {prueba.map((item, index) => (
                    <img onClick={() => {changeItem(item.id)}} className='img-fluid' key={index} src={item.img} alt={item.imgAlt} loading="lazy"/>
                ))}
            </div>
        </div>
    )
}

export default ProductsPresentation;
