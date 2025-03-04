
import  { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'


const Memorize = () => {

 const {increment,decrement,resetValue,counter}=useCounter()
 const [show,setShow] = useState(true)

  return (
    <>
        <h1>Counter: <Small value={counter} /></h1>
        <button className='btn btn-primary' onClick={increment}>+1</button>
        <button className='btn btn-primary' onClick={decrement}>-1</button>
        <button className='btn btn-primary' onClick={resetValue}>Reset</button>
        <button className='btn btn-primary' onClick={()=>setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}

export default Memorize
