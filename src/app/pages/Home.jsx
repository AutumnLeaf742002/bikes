import { useContext } from "react"

import { AlertsContainer, Hr, Title } from "../../ui/components"
import { Products } from "../components"


export const Home = () => {

  return (
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
  )
}