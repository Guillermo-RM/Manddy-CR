import React from 'react'
import Card from '../card/Card'

export default function PageStore({products}) {


  return (
    <>
        <div className='d-flex py-5 gap-4 flex-wrap justify-content-evenly bg-primary-200'>
            {products.map(item => (
                <Card item={item} key={item.id} type={false}/>
            ))}
        </div>
    </>
  )
}
