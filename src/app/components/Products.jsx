import { ProductCard } from "./ProductCard"

const products = [
    {
        id: 1,
        name: "Mountain Bike X1",
        price: 1200,
        description: "Una bicicleta de montaña duradera, perfecta para aventuras fuera de la carretera.",
        img: "placeholder"
    },
    {
        id: 2,
        name: "Road Bike Pro",
        price: 1500,
        description: "Una bicicleta de carretera ligera diseñada para velocidad y rendimiento.",
        img: "placeholder"
    },
    {
        id: 3,
        name: "Hybrid Bike 3000",
        price: 1000,
        description: "Una bicicleta híbrida versátil adecuada tanto para la ciudad como para senderos.",
        img: "placeholder"
    },
    {
        id: 4,
        name: "Electric Bike E-Zoom",
        price: 2500,
        description: "Una bicicleta eléctrica con un motor potente para desplazamientos sin esfuerzo.",
        img: "placeholder"
    },
    {
        id: 5,
        name: "BMX Stunt Rider",
        price: 800,
        description: "Una bicicleta BMX resistente diseñada para trucos y acrobacias.",
        img: "placeholder"
    },
    {
        id: 6,
        name: "Gravel Bike Explorer",
        price: 1400,
        description: "Una bicicleta gravel ideal para explorar caminos de tierra y senderos.",
        img: "placeholder"
    },
    {
        id: 7,
        name: "Folding Bike Compact",
        price: 900,
        description: "Una bicicleta plegable práctica y fácil de transportar para la ciudad.",
        img: "placeholder"
    },
    {
        id: 8,
        name: "Kids Bike FunRide",
        price: 500,
        description: "Una bicicleta para niños, segura y divertida para aprender a montar.",
        img: "placeholder"
    },
    {
        id: 9,
        name: "Cruiser Bike Relax",
        price: 1100,
        description: "Una bicicleta cruiser cómoda para paseos relajados en la playa o la ciudad.",
        img: "placeholder"
    },
    {
        id: 10,
        name: "Fat Tire Bike Beast",
        price: 2000,
        description: "Una bicicleta con neumáticos anchos, perfecta para terrenos difíciles como arena o nieve.",
        img: "placeholder"
    }
]

export const Products = () => {

    return (
        <div className="grid grid-cols-3 gap-5 h-full place-items-center">
            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
        </div>
    )
}