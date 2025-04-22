import { MenuItem } from "./MenuItem"

export const Menu = () => {
    return (
        <ul className="flex gap-4">
            <MenuItem path="/home" text="Inicio" />
            <MenuItem path="/search" text="Buscar" />
            <MenuItem path="/add" text="Agregar" />
        </ul>
    )
}