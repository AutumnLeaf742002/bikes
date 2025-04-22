import { NavLink } from "react-router"

export const MenuItem = ({ text, path }) => {
    return (
        <NavLink to={path}
            className={({isActive})=>`transition hover:underline underline-offset-2 ${isActive?"text-blue-500":""}`}
        >
            {text}
        </NavLink>
    )
}