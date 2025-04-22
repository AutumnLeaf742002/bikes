import { MainPage } from "./MainPage"

export const NotFound = () => {
    return (
        <MainPage>
            <div className="w-full h-full bg-[#1F95F5] flex justify-center items-center">
                <h1 className="text-white text-center w-full font-semibold text-5xl absolute top-10 text-shadow-lg">
                    Pagina no encontrada
                </h1>
                <img src="notfound.png" alt="not found"
                    className="w-full"
                />
            </div>
        </MainPage>
    )
}