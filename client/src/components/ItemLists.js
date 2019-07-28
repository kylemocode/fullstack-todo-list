import React, { useContext } from 'react';
import Item from '../components/Item.js';
import { TodoContext } from '../contexts/TodoContext';

const ItemLists  = () => {
     
    const { todos } = useContext(TodoContext);
    // console.log(todos)
    return (
        <div>
            {todos.length? todos.map((todo) => {
                return <Item key={todo._id} id={todo._id} item={todo.item} author={todo.author}/>
            }): <p>loading...</p>}
            
        </div>
    )
    
}


export default ItemLists
