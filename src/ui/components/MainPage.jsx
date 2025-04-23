export const MainPage = ({ children, classes }) => {
    return (
        <main className={`w-screen h-screen overflow-x-hidden bg-slate-100 ${classes}`}>
            { children }
        </main>
    )
}