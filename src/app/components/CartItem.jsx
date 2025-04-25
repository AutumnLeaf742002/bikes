import { useContext, useRef } from "react"

import { AlertsContext, CartContext } from "../../context"

import { Dialog } from "../../ui/components"

export const CartItem = ({ id = 0, name = "no product", price = 0, ammount = 1 }) => {

    const { removeProduct } = useContext(CartContext)
    const { newAlert } = useContext(AlertsContext)

    const dialogRef = useRef()

    const onRemoveProduct = () => {
        dialogRef.current.showModal()
    }

    const callback = () => {
        removeProduct(id)
        newAlert("warning", `${name} se ha eliminado del carrito`)
    }


    return (
        <>
            <Dialog ref={dialogRef} text={`Se eliminará ${name} del carrito`} callback={callback} />

            <tr className="p-2 text-center border-b border-gray-400">
                <td className="p-2">{name}</td>
                <td className="p-2">${price}</td>
                <td className="p-2">{ammount}</td>
                <td className="p-2">${price * ammount}</td>
                <td>
                    <button className="transition duration-300 ease-in-out text-red-500 hover:underline underline-offset-2 cursor-pointer"
                        onClick={onRemoveProduct}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}