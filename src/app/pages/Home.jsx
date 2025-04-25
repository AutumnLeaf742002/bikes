import { AlertsContainer, Hr, Title } from "../../ui/components"
import { Products, CartFloat } from "../components"

export const Home = () => {

  return (
    <>
      <CartFloat />
      <div className="px-2 pb-5">
        <AlertsContainer />

        <div className="flex flex-col">
          <span className="flex justify-center items-center mt-3">
            <Title title="Todos los productos" />
          </span>
          <Hr />

          <span>
            <Products />
          </span>
        </div>
      </div>
    </>
  )
}