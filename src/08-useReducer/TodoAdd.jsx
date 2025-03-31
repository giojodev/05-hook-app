import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange,onResetForm} = useForm({
        description: ''
    })


    const onFormSubmit = (event) => {
        event.preventDefault()
        if (description.length <= 1) return
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        // const action = {
        //     type: 'add',
        //     payload: newTodo
        // }
        onNewTodo && onNewTodo(newTodo)
        // dispatch(action)
        // onResetForm()
    }
  return (
      <form onSubmit={onFormSubmit}>
          <input type="text"
              placeholder="Agregar tarea"
              className="form-control"
              name="description"
              value={description}
              onChange={onInputChange}
              />
          <button type="submit"
              className="btn btn-outline-primary mt-1 btn-block">
              Agregar
          </button>
      </form>
  )
}

