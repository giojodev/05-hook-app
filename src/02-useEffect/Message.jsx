
import { useEffect } from "react"
export const Message = () => {
    useEffect(() => {
        //Este mensaje aparecera cuando el componente se monte o aparezca en la pagina
      console.log('Message Mounted')
    
      return () => {
        //Este mensaje aparecera cuando el componente se destruya o desaparezca de la pagina
        console.log('Message UnMounted')
      }
    }, [])
    
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}

