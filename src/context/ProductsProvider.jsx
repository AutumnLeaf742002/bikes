import { useState } from "react"

import { ProductsContext } from "./productsContext"
import { products } from "../data"

export const ProductsProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState(products)

    const getProducts = () => {
        return allProducts
    }

    const getProductById = (id) => {
        const product = allProducts.find((product) => product.id == id)
        return product
    }

    return (
        <ProductsContext.Provider value={{ getProducts, getProductById }}>
            {children}
        </ProductsContext.Provider>
    )
}