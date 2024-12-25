import {useCounter} from '../hooks/useCounter.js';

export const CounterWithCustomHook = () => {
    const {counter,increment,decrement,resetValue} = useCounter(100);

    return(
        <>
        
            <h1>
                Counter With CustomHook: {counter}
            </h1>
            <button className="btn btn-primary" onClick={()=> increment(2) }>+1</button>
            <button className="btn btn-primary" onClick={resetValue} >Reset</button>
            <button className="btn btn-primary" onClick={()=> decrement(2)}>-1</button>
        </>
    )
}