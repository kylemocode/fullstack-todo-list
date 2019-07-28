import React,{createContext, useReducer,useEffect} from 'react';
import { bookReducer } from '../reducers/todoReducer';
import { fetchTodos } from '../actions/todosAction';
export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [todos, dispatch] = useReducer(bookReducer,[])
    useEffect(() => {
        fetch("/todos/items")
            .then((res) => res.json())
            .then((data) => dispatch(fetchTodos(data.todos)))
    },[todos])

    return (
        <TodoContext.Provider value={{todos,dispatch}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;