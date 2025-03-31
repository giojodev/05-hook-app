import { TodoItem } from './TodoItem.jsx'

export const TodoList = ({ todos = [] }) => {
    return (

        <ul className="list-group">
            {
                todos.map(todo => (

                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>

    )
}


