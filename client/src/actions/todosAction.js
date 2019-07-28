
export const fetchTodos = (todos) => {
    return { type: "FETCH_TODOS", todos}
};

export const addTodo = (todo) => {
    return { type: "ADD_TODO", todo: {
        item: todo.item,
        author: todo.author
    }}
}

export const removeTodo = (id) => {
    return { type: "REMOVE_TODO", id}
}