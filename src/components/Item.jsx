import React from 'react'
import { Link, useLocation} from 'react-router-dom'

const Item = ({imageSrc, imageAlt, title, price, brand, id, category}) => {
    return (
        <Link to={`/${id}`}>
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <img className="img-producto w-full" src={imageSrc} alt={imageAlt}/>
                <div className="px-6 py-4 border-t border-gray-200">
                    <div className=" mb-2 text-center">
                        {title}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <p className="text-gray-700 text-base font-bold text-center">
                            $ {price} <span className='text-[#00a650] font-light text-sm'>10% OFF</span>
                        </p>
                        <p className='font-light'>{brand}-{id}</p>
                    </div>
                </div>
            </div>
        </Link>
            

    )
}

export default Item