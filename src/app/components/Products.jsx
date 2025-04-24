import { useContext } from "react"

import { ProductsContext } from "../../context"

import { ProductCard } from "./ProductCard"

export const Products = () => {

    const products = useContext(ProductsContext).getProducts()

    return (
        <div className="grid grid-cols-3 gap-5 h-full place-items-center">
            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </div>
    )
}