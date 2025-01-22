import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CoutnerWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultipleCustomHooks />
  </StrictMode>,
)
