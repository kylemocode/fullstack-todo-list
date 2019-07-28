export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_TODOS':
            return action.todos
        case 'ADD_TODO':
            return [...state,{
                item: action.todo.item,
                author: action.todo.author,
                id: action.todo.id
            }]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
} 