import React from 'react'
import Count from './Count'
import { useLocation, useParams } from 'react-router-dom'

const ItemDetail = ({data}) => {

    const {id} = useParams()
    const categoria = useLocation().pathname.split('/')[1]
    const items = data[categoria]
    const item = items.find(item => item.id == id)
    // console.log(id)
    // console.log(location)
    // console.log(items)
    // console.log(item)

    return (
        <div className="flex items-center justify-center rounded overflow-hidden shadow-lg mb-5">
            <div className='border-r border-gray-200'>
                <img className="img-producto-detallado w-full" src={item.imageSrc} alt={item.imageAlt}/>
            </div>
            
            <div className='flex flex-col p-4'>
                <div className="px-6 py-4">
                    <h1 className="font-bold text-2xl mb-10 text-center">
                        {item.title}
                    </h1>
                    <h2 className='text-center text-xl font-light p-5 mb-5'>{item.description}</h2>
                    <h3 className="text-gray-700 font-bold text-center text-3xl">
                        $ {item.price} <span className='text-[#00a650] font-medium text-xl'>10% OFF</span>
                    </h3>
                </div>
                <div className="px-6 flex justify-around">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 opacity-40">Stock: {item.stock}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 opacity-40">Id: {item.id}</span>
                </div>
                <div className='mt-7'>
                    <Count item={item}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
