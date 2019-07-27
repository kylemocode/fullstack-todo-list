import React, { useEffect,useState } from 'react';
import Item from '../components/Item.js';

const ItemLists  = (props) => {
     

    return (
        <div>
            {props.todos.length? props.todos.map((todo) => {
                return <Item key={todo._id} id={todo._id} item={todo.item} author={todo.author}/>
            }): <p>loading...</p>}
            
        </div>
    )
    
}


export default ItemLists
