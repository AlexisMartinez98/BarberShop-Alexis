import { useState } from 'react'
import {useCartContext} from '../contex/CartContext'
import '../../db/firebase-config'
import {  getFirestore, collection, addDoc } from 'firebase/firestore'

const Form = () => {
    const {cart, setCart} = useCartContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [orderId, setOrderId] = useState('')

    const db = getFirestore()

    const enviarDatos = (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                name: name,
                email: email,
                phone: phone,
                address: address
            },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date()
        }
        const orders = collection(getFirestore(), 'orders')
        addDoc(orders, order).then (({id}) => {
            setOrderId(id)
        })
        .catch((error) => {
            console.log(error)
        })
        setCart([])
        setTimeout( function() { window.location.href = "/"; }, 3500 )
        }

        const mostrarOrden = () => {
            if(orderId !== ''){
                return <div>
                    <h1 className='text-2xl font-bold m-16'> Gracias por su compra.!</h1>
                    <p className='text-2xl font-bold m-16'>Su orden de compra es: #<span className='text-red-700'>{orderId}</span></p>
                </div>
            }
        }
    return (
        <>
        {mostrarOrden()}
        {orderId === '' && 
        <div>
            <h1 className='text-2xl font-bold m-16'>Complete el formulario para finalizar la compra</h1>
            <form action="" className='flex flex-col justify-center items-center'>
                <div className="flex flex-col ">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone">Telefono</label>
                    <input type="tel" name="phone" id="phone" onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address">Direccion</label>
                    <input type="text" name="address" id="address" onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <p className='text-2xl font-bold m-16'>
                    Total: <span className='text-red-600'>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
                </p>
                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 m-5 rounded w-6/6' onClick={enviarDatos}>Finalizar</button>
            </form>
        </div>}
        
        </>
    )
}

export default Form