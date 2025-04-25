import { useParams } from "react-router"
import { useContext, useRef } from "react"

import { AlertsContext, ProductsContext, CartContext } from "../../context"

import { AlertsContainer, Dialog, Hr, Title } from "../../ui/components"
import { ArrowBack, CartFloat } from "../components"

export const Product = () => {

    const { id } = useParams()
    const { addProduct } = useContext(CartContext)
    const { newAlert } = useContext(AlertsContext)
    const dialogRef = useRef()

    const product = useContext(ProductsContext).getProductById(id)

    const onAddProduct = () => {
        dialogRef.current.showModal()
    }

    const callback = () => {
        addProduct({...product, ammount: 1 })
        newAlert("success", "Producto añadido al carrito")
    }

    return (
        <>
            <CartFloat />
            <AlertsContainer />
            <Dialog ref={dialogRef} text={`${product.name} se agregará al carrito`} callback={callback} />

            <div>
                <span className="flex items-center w-full relative">
                    <ArrowBack />
                    <span className="absolute left-1/2 -translate-x-1/2">
                        <Title title={product.name} />
                    </span>
                </span>
                <Hr />

                <div className="w-full flex flex-col items-center">
                    <img src={`/bikes/assets/${product.img}.png`} alt={product.name} className="w-1/4 object-cover" />

                    <div className="w-1/4 flex flex-col gap-2 border border-gray-300">
                        <table>
                            <tbody>
                                <tr className="border-b border-gray-400">
                                    <td className="font-semibold p-1 bg-gray-300">Descripcion</td>
                                    <td className="text-gray-800 p-1">{product.description}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold p-1 bg-gray-300">Precio</td>
                                    <td className="text-gray-800 p-1">{product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="bg-green-600 text-white h-8 shadow-lg cursor-pointer hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center gap-2 w-1/4"
                        onClick={onAddProduct}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}