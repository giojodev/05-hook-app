
export const TodoItem = ({ todo }) => {
   return (

        <li className="list-group-item d-flex justify-content-between">
            <span className="align -self-center">{todo.desc}</span>
            <button className="btn btn-danger">Borrar</button>
        </li>

    )
}

