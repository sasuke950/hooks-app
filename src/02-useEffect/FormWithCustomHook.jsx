import { useEffect } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { username, email, password, formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    })

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
            <h1>Formulario FormWithCustomHook</h1>
            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />

            <input type="email" className="form-control mt-2" placeholder="Ingrese un email" name="email" value={email} onChange={onInputChange} />

            <input type="password" className="form-control mt-2" placeholder="Ingrese una contraseña" name="password" value={password} onChange={onInputChange} />

            <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
        </>
    )
}
