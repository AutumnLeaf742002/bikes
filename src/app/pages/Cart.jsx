import { useContext } from "react"

import { CartContext } from "../../context"

import { AlertsContainer, Hr, Title } from "../../ui/components"
import { ArrowBack, CartItem } from "../components"

export const Cart = () => {

    const cartProducts = useContext(CartContext).getProducts()

    let totalPrice = 0
    let totalAmmount = 0

    cartProducts.map(product => {
        totalPrice += product.price * product.ammount
        totalAmmount += product.ammount
    })

    return (
        <>
            <AlertsContainer />
            <div>
                <span className="relative">
                    <ArrowBack />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Title title="Carrito" />
                    </span>
                </span>
                <Hr />

                <div className="mx-auto w-2/3">
                    <h1 className="w-full bg-neutral-900 text-white p-2 text-center">
                        Tus productos añadidos al carrito se verán reflejados aquí
                    </h1>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="p-2 text-center border-b-2 border-neutral-900">
                                <th className="p-2">Producto</th>
                                <th className="p-2">Precio</th>
                                <th className="p-2">Cantidad</th>
                                <th className="p-2">Sub Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cartProducts.length === 0 && (
                                    <tr className="p-2 text-center border-b-2 border-neutral-900">
                                        <td colSpan={5} className="p-2">
                                            No hay productos en el carrito
                                        </td>
                                    </tr>
                                )
                            }

                            {
                                cartProducts?.map((product) => {
                                    return (
                                        <CartItem key={product.id} {...product} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="flex flex-col mt-5 gap-2">
                        <span>
                            <span className="text-xl font-semibold">Productos: </span>
                            <span className="text-lg text-blue-600 font-semibold">
                                {totalAmmount}
                            </span>
                        </span>
                        <span>
                            <span className="text-xl font-semibold">Total: </span>
                            <span className="text-lg text-blue-600 font-semibold">
                                ${totalPrice}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}