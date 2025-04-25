import { useEffect } from "react"

export const Dialog = ({ ref, text = "no text", callback = () => { } }) => {

    useEffect(() => {
        ref.current.close()
    }, [])

    return (
        <dialog ref={ref}
            className="backdrop:bg-black/50 w-1/3 h-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md"
        >
            <div className="flex flex-col w-full h-full">
                <div className="h-6 bg-neutral-900 rounded-t-md">
                    <span className="w-full h-full flex items-center justify-end font-semibold text-md px-2 cursor-pointer"
                        onClick={() => ref.current.close()}
                    >
                        <i className="bi bi-x-lg text-white hover:text-red-500 transition"></i>
                    </span>
                </div>

                <div className="w-full flex-1 flex flex-col p-2">
                    <h1 className="text-4xl text-center flex flex-col gap-2">
                        <i className="bi bi-exclamation-diamond-fill text-orange-400"></i>
                        <h1 className="text-lg">
                            {
                                text
                            }
                        </h1>
                    </h1>
                    <span className="flex-1 flex items-end justify-end gap-3">
                        <button onClick={() => ref.current.close()}
                            className="w-20 bg-red-500 text-white text-center h-8 rounded-md cursor-pointer hover:bg-red-600 transition"
                        >
                            Cancelar
                        </button>
                        <button onClick={() => {
                            callback()
                            ref.current.close()
                        }}
                            className="w-20 bg-green-500 text-white text-center h-8 rounded-md cursor-pointer hover:bg-green-600 transition"
                        >
                            Aceptar
                        </button>
                    </span>
                </div>
            </div>
        </dialog>
    )
}