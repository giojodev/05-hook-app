import {useState,useCallback} from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
 const [counter,setCounter] = useState(10)

    const incrementFather = useCallback(
        () => {
            setCounter((value) => value + 1)
        },
        [],
) 
  return (
    <>
      <h1>Callback Hook  : { counter }</h1>
      <hr />   
        <ShowIncrement increment={incrementFather}/> 
    </>
  )
}
