import { NavLink } from "react-router"

export const ProductCard = ({ name, price, img, id }) => {

    const imgSrc = `/bikes/assets/${img}.png`

    return (
        <div className="border border-gray-300 w-78 p-2 rounded-md shadow-lg flex flex-col gap-3">
            <span>
                <img src={imgSrc} alt={name}
                    className="w-full object-cover"
                />
            </span>
            <span className="w-full flex flex-col gap-1">
                <h2 className="text-lg font-bold">
                    {name}
                </h2>
                <p className="text-lg font-semibold text-green-600">
                    ${price}
                </p>
                <NavLink to={`/product/${id}`}>
                    <span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
                        Ver mas
                    </span>
                </NavLink>
                <button className="bg-green-600 text-white h-8 rounded-sm shadow-lg cursor-pointer hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center gap-2">
                    Agregar al carrito
                </button>
            </span>
        </div>
    )
}