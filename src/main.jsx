import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CoutnerWithCustomHook'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>,
)
