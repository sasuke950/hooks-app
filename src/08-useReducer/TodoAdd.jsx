import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        id: new Date().getTime(),
        description: '',
        done: false,
    })

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        onNewTodo({
            id: new Date().getTime(),
            description,
            done: false,
        })

        onResetForm()
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="description"
                placeholder="¿Que hay que hacer?" className="form-control"
                value={description}
                onChange={onInputChange} />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
