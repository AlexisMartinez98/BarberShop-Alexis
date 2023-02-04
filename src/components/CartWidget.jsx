import React from 'react'
import carrito from '../img/carrito.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../contex/CartContext'

const CartWidget = () => {
    const {cart} = useCartContext()

    const total = cart.reduce((acc, item) => acc + item.quantity, 0)
    return (
        <div className='w-3/5 flex justify-end items-center pr-14'>
            <Link to="/cart" >
                <img src={carrito} alt="carrito" id='carrito'/>
            </Link>
            <span className='text-white bg-red-600 rounded-full p-1 ml-2 text-sm'>{total}</span>
        </div>
    )
}

export default CartWidget