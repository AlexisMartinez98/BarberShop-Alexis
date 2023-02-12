import { useState } from 'react'
import {useCartContext} from '../contex/CartContext'
import '../../db/firebase-config'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const Form = () => {
    const {cart, setCart} = useCartContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [orderId, setOrderId] = useState('')

    const db = getFirestore()

    const validateForm = (name, email, confirmEmail, phone, address) => {
        if (name != '' && email != '' && confirmEmail != '' && phone != '' && address != '' && (email == confirmEmail)) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }

    const enviarDatos = (e) => {
        e.preventDefault()
        validateForm(name, email, confirmEmail, phone, address)
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
        setTimeout( function() { window.location.href = "/"; }, 4500 )
        }

        const mostrarOrden = () => {
            if(orderId !== ''){
                return <div>
                    <h1 className='text-2xl font-bold m-16'> Gracias por su compra.!</h1>
                    <p className='text-2xl font-bold m-16'>Su orden de compra es: #<span className='text-red-700'>{orderId}</span></p>
                </div>
            }
        }

        const mensajeEmail = () => {
            if (email !== confirmEmail) {
                return <span className='text-white bg-red-500 font-bold w-full '>Los emails no coinciden</span>
            }
        }
    return (
        <>
        {mostrarOrden()}
        {orderId === '' && 
        <div>
            <h1 className='text-2xl font-bold m-16'>Complete el formulario para finalizar la compra</h1>
            <form className='flex flex-col w-1/2 mx-auto' onSubmit={enviarDatos}>
                <label className='text-xl font-bold m-2'>Nombre y Apellido</label>  
                <input className='border-2 border-gray-300 rounded-md m-2' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                <label className='text-xl font-bold m-2'>Email</label>
                <input className='border-2 border-gray-300 rounded-md m-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className='text-xl font-bold m-2'>Confirmar Email</label>
                <input className='border-2 border-gray-300 rounded-md m-2' type='email' value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                {mensajeEmail()}
                <label className='text-xl font-bold m-2'>Teléfono</label>
                <input className='border-2 border-gray-300 rounded-md m-2' type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label className='text-xl font-bold m-2'>Dirección</label>
                <input className='border-2 border-gray-300 rounded-md m-2' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                <button className={`text-white font-bold m-2 p-2 rounded-md  ${(name != '' && email != '' && confirmEmail != '' && phone != '' && address != '' && (email == confirmEmail) ) ? "bg-red-600 cursor-pointer hover:bg-red-700 ": "bg-red-400 cursor-not-allowed"}`}
                    type='submit' 
                    disabled={(name != '' && email != '' && confirmEmail != '' && phone != '' && address != '' && (email == confirmEmail) ) ? false : true}
                    >Finalizar Compra</button>
                    
            </form>
        </div>}
        </>
    )
} 

export default Form
