import React from 'react'
import carrito from '../img/carrito.png'
import { useState } from 'react'

const CartWidget = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className='w-3/5 flex justify-end items-center pr-14'>
            <button href="/carrito" className='' onClick={handleClick}>
                <img src={carrito} alt="carrito" id='carrito'/>
            </button>
            <span className='text-white bg-red-600 rounded-full p-1 ml-2 text-sm'>{count}</span>
        </div>
    )
}

export default CartWidget