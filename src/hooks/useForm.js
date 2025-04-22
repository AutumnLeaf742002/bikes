import { useState } from "react"

export const useForm = ( initialState = {} ) => {
  
  const [state, setState] = useState(initialState)

  const onInputChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  const onResetForm = ()=>{
    setState(initialState)
  }

  return {
    ...state,
    state,
    onInputChange,
    onResetForm
  }
}