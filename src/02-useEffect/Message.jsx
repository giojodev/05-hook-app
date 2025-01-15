
import { useEffect } from "react"
export const Message = () => {
    useEffect(() => {
      const [coords, setCoords] = useState({x:0, y:0})
        //Este mensaje aparecera cuando el componente se monte o aparezca en la pagina
      const onMouseMove = ({x,y}) => {  
        
        setCoords({x,y})
      }
      window.addEventListener('mousemove', onMouseMove);
      return () => {
        //Este mensaje aparecera cuando el componente se destruya o desaparezca de la pagina
        window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    
  return (
    <>
      <h3>Usuario ya existe</h3>
      <div>{JSON.stringify(coords)}</div>
    </>
  )
}

