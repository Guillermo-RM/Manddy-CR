import style from './Card.module.scss'
import { Link } from 'react-router-dom';
import { sendMessage } from '../../../logic/getProduct';

function Card ({item, type}) {

    return(
        <div className={`${style['card-container']} animate my-2 col-5 col-sm-5 col-md-4 col-lg-3 bg-primary-150 card`}>
            <img className='card-img-top' src={item.img} alt={item.imgAlt} loading="lazy"/>

            <div className='card-body p-1 text-center'>
                <p className='card-title fs-4 color-primary-300 fw-bold font-subtitles'>{item.name}</p>
                <p className='p-0 m-0 font-text fs-4'>{item.tipo}</p>
                <p className='fw-medium color-primary-300 font-text fs-2 m-0'>₡{item.price}</p>
            </div>

            <div className='d-flex flex-column d-block-sm gap-2 align-items-center justify-content-evenly w-100 p-2'>
                {type ? (
                    <Link to={`/${item.route}`} className={`${style['button-card']} ${style['primary']} w-100 `}>Ver Más</Link>

                ) : (<></>)}
                <button onClick={()=> sendMessage(item)} className={`${style['button-card']} ${style['secondary']} w-100 `}>Encargar</button>
            </div>
        </div>
    )
}

export default Card;