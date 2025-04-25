import { useState } from "react"

import { CartContext } from "./cartContext"

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return products
    }

    const addProduct = (newProduct = {}) => {

        if(products.find(product => product.id === newProduct.id)){
            newProduct = {...newProduct, ammount: products.find(product => product.id === newProduct.id).ammount + 1}
            editProduct(newProduct.id, newProduct)
            return
        }

        setProducts([...products, newProduct])
    }

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const editProduct = (id, newProduct) => {
        setProducts(products.map(preProduct => {
            if(preProduct.id === id){
                return {...preProduct, ...newProduct}
            }
            else{
                return preProduct
            }
        }))
    }

    return (
        <CartContext.Provider value={{getProducts, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    )
}