
import {useEffect, useState} from 'react'


const localCache= {

}


export const useFetch = (url) => {
  
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
    });
    
    useEffect(() => {
        getFechedData();
        
    }, [url])
    
    const setLoadingState = () => {
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null
        });
    }

    const getFechedData = async () => {
        if(localCache[url]){
            setState({
                data:localCache[url],
                isLoading:false,
                hasError:false,
                error:null
            });
            return;
        }
       
        setLoadingState();

        const response = await fetch(url);

        await new Promise(resolve=>setTimeout(resolve,1500));
        if(!response.ok){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    code:response.status,
                    message:response.statusText
                }
            });
            return;
        }
        const data = await response.json();
        setState({
            data,
            isLoading:false,
            hasError:false,
            error:null
        });
        localCache[url] = data;
        //  console.log(data);
    }
  
    return {
    data:state.data,
    isLoading:state.isLoading,
    hasError:state.hasError,
  }
}

