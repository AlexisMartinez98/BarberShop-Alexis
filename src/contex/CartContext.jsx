import {useState, useContext} from 'react'
import { createContext } from 'react'
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    console.log(cart)

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + quantity}
                }else {
                    return cartItem
                }
            })
            setCart(newCart)
        }else {
            setCart([...cart, {...item, quantity}])
        }
    }
    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(item => item.id === id)? true : false

    const removeProduct = (id) => setCart(cart.filter(item => item.id !== id))

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addItem,
            clearCart,
            isInCart,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider