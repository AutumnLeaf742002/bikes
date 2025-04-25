import { NavLink } from "react-router"

export const CartFloat = () => {
    return (
        <NavLink to="/cart" className="absolute bg-gray-700 bottom-1/3 right-5 shadow-lg flex justify-center items-center z-50 w-14 h-14 rounded-full border-4 border-neutral-900 cursor-pointer">
            <i className="bi bi-cart3 text-white text-3xl"></i>
        </NavLink>
    )
}