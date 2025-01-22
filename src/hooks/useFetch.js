
import {useEffect, useState} from 'react'

export const useFetch = () => {
  
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
    });
    
    useEffect(() => {
        getFechedData();
    
    }, [])
    
    const getFechedData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await response.json();
        console.log(data);
    }
  
    return {
    data:state.data,
    isLoading:state.isLoading,
    hasError:state.hasError,
  }
}

