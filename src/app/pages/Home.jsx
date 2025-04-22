import { useContext, useState } from "react"

import { AlertsContext } from "../../context"

import { AlertsContainer } from "../../ui/components"


export const Home = () => {

  const { newAlert } = useContext(AlertsContext)

  const [number, setNumber] = useState(1)

  return (
      <>
        <AlertsContainer />
        <h1>
          Home
        </h1>
        <button onClick={() => {
          newAlert("success", `Alert ${number}`)
          setNumber(number+1)
        }}>
          New alert
        </button>
      </>
  )
}