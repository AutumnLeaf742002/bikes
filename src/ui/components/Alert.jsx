import { useContext } from "react"

import { AlertsContext } from "../../context"

export const Alert = ({ type = "warning", text = "no text", id}) => {

    const {removeAlert} = useContext(AlertsContext)

    const onCloseAlert = ()=>{
        removeAlert(id)
    }

    let style = ""

    switch (type) {
        case "danger":
            style = "bg-[#670a0a] border-red-600 text-red-300"
            break

        case "success":
            style = "bg-[#0a673c] border-green-600 text-green-300"
            break

        case "warning":
            style = "bg-[#a17e08] border-yellow-300 text-yellow-300"
            break
    }

    return (
        <div className={`animate__animated animate__fadeIn border w-full min-h-16 rounded-sm shadow-sm flex px-2 relative z-20 ${style}`}>
            <span className="w-6/7 flex items-center">
                {text}
            </span>
            <span className="flex-1 flex justify-center items-center cursor-pointer">
                <i
                    onClick={onCloseAlert}
                    className="bi bi-x-circle text-xl bg-red"></i>
            </span>
        </div>
    )
}