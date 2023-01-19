import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef()

    console.log('ref', inputRef)

    const onClick = () => {
        inputRef.current.select()
        console.log('ref', inputRef)
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input type="text" placeholder="Ingrese su nombre" className="form-control mt-2" />

            <input type="text" placeholder="Ingrese su nombre" className="form-control mt-2" ref={inputRef} />

            <input type="text" placeholder="Ingrese su nombre" className="form-control mt-2" />

            <input type="text" placeholder="Ingrese su nombre" className="form-control mt-2" />

            <button className="btn btn-primary mt-2" onClick={onClick}>Set Focus</button>
        </>
    )
}