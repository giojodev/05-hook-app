import {useCounter} from '../hooks/useCounter.js';

export const CounterWithCustomHook = () => {
    const {counter} = useCounter(100);
    return(
        <>
        
            <h1>
                Counter With CustomHook: {counter}
            </h1>
            <button className="btn btn-primary">+1</button>
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-primary">-1</button>
        </>
    )
}