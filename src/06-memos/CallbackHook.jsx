import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
    //Usamos el callback para apuntar al mismo espacio de memoria, junto con el memo() aseguramos que no se renderice muchas veces el mismo componente ShowIncrement
    const incrementFather = useCallback((cont) => {
        setCounter((value) => value + cont)
    }, [])

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>

    )
}
