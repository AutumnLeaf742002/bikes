export const Dialog = ({ ref, text = "no text", callback = () => { } }) => {

    return (
        <dialog ref={ref}
            className="backdrop:bg-black/50 w-1/3 h-1/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-md shadow-md"
        >
            <div className="w-full h-full flex flex-col">
                <h1 className="text-xl text-center">
                    {
                        text
                    }
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
        </dialog>
    )
}