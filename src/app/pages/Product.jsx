import { useParams } from "react-router"
import { useContext } from "react"

import { ProductsContext } from "../../context"

import { Hr, Title } from "../../ui/components"
import { ArrowBack } from "../components"

export const Product = () => {

    const { id } = useParams()

    const product = useContext(ProductsContext).getProductById(id)

    return (
        <>
            <div>
                <span className="flex items-center w-full relative">
                    <ArrowBack />
                    <span className="absolute left-1/2 -translate-x-1/2">
                        <Title title="nombre del producto" />
                    </span>
                </span>
                <Hr />

                <div className="w-full flex flex-col items-center">
                    <img src={`/bikes/assets/${product.img}.png`} alt={product.name} className="w-1/3 object-cover" />
                    
                    <div className="w-1/3 flex flex-col gap-2 border border-gray-300">
                        <table>
                            <tbody>
                                <tr className="border-b border-gray-400">
                                    <td className="font-semibold p-1 bg-gray-300">Nombre</td>
                                    <td className="text-gray-800 p-1">{product.name}</td>
                                </tr>
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
                </div>
            </div>
        </>
    )
}