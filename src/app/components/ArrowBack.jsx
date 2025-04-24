import { useNavigate } from "react-router"

export const ArrowBack = () => {

    const navigate = useNavigate()

    return (
        <span className="m-3 flex items-center gap-1 text-blue-500 hover:text-blue-700 font-semibold cursor-pointer w-18"
            onClick={() => navigate(-1)}
        >
            <i className="bi bi-arrow-left-circle text-lg"></i>
            Volver
        </span>
    )
}