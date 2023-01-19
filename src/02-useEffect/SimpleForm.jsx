import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'joel@gmail.com',
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { value, name } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect')
    }, [])

    useEffect(() => {
        // console.log('useEffect formState cambio')
    }, [formState])

    useEffect(() => {
        // console.log('useEffect email cambio')
    }, [email])


    return (
        <>
            <h1>Formulario SimpleForm</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />

            <input type="email" className="form-control mt-2" placeholder="Ingrese un email" name="email" value={email} onChange={onInputChange} />

            {
                username === 'strider2' &&
                <Message />

            }

        </>
    )
}
