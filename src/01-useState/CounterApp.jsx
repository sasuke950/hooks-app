import { useState } from "react"

export default function CounterApp() {

    const [state , setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter: {counter1}</h1>
            <hr />
            <button onClick={() => (setCounter({
                ...state,
                counter1: counter1 + 1
            }))}>+1</button>
        </>
    )
}
