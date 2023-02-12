import React from 'react'
import {useCartContext} from '../contex/CartContext'
import cartStyle from '../components/styles/cartStyle.css'
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart, removeProduct} = useCartContext()

    const mapsItems = cart.map((item) => {
        return (
            <div key={item.id} className='flex justify-center flex-col border-b-2 p-10'>
                    <div className='flex items-center justify-center'>
                        <img className='w-2/12' id='imgCart' src={item.imageSrc} alt={item.imageAlt}/> 
                        <h2 className='w-3/12 ml-16 text-xl font-medium'>{item.name}-{item.brand}</h2>
                        <div className='flex'>
                            <p className='p-14 font-bold'>Cantidad: {item.quantity} </p>
                            <p className='p-14 font-bold'>Precio: ${item.price}</p>
                            <p className='p-14 font-bold '>SubTotal: ${item.quantity * item.price}</p>
                        </div>
                        <button className='hover:text-red-700 text-red-600 font-bold py-1 px-4 ml-10' onClick={() => removeProduct(item.id)}>Eliminar</button>
                    </div>
            </div>
        )
    })
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='text-center font-bold text-2xl m-4'>CARRITO</h1>
            {mapsItems}
            <div className='flex justify-end'>
                {cart.length === 0 && <h2 className='text-center font-bold text-2xl m-4 text-red-700'>No hay productos en el carrito..!!</h2>}
                <p className='text-2xl font-bold m-16'>
                    Total: <span className='text-red-600'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                </p>
            </div>
            <div className='flex justify-between'>
                <button className='hover:text-red-700 text-red-600 font-bold py-1 px-4 w-0.5/6' onClick={clearCart}>Limpiar Carrito</button>
                <Link to={'/form'}>
                    <button className={`text-white font-bold py-1 px-4 m-5 rounded w-6/6 cursor-not-allowed  ${cart.length <= 0 ? "bg-red-400 ": "bg-red-600 cursor-pointer hover:bg-red-700"}`} 
                        disabled={cart.length <= 0 ? true : false}
                    >Pagar</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Cart