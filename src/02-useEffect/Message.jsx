import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {

        //Se debe de asignar la función a una variable para mandar a remover el evento ya que si se pasa directamente se creará otro espacio de memoria que no siempre será el mismo
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        };
        
        window.addEventListener("mousemove", onMouseMove)

        return () => {
            //Se manda a llamar cuando se desmonta el componente
            window.removeEventListener("mousemove", onMouseMove)
        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
