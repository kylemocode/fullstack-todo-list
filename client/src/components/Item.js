import React,{ useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../contexts/TodoContext';
import { removeTodo } from '../actions/todosAction';

const Item = (props) => {
    const { dispatch } = useContext(TodoContext);
    const cardStyle={
        fontFamily: "微軟正黑體",
        display: "flex",
        justifyContent: "center",
        margin: "10px 0px"
    }
    
    const handleDelete = () => {
        axios.delete(`todos/delete/${props.id}`)
            .then(() => dispatch(removeTodo(props.id)))
    }

    return (
        <div style={cardStyle}>
            <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">待辦事項: {props.item}</h5>
                    <p class="card-text">填寫者: {props.author}</p>
                    <div style={{width:"30px",height: "30px",backgroundColor:"red",color: "white",border: "none","borderRadius":"5px",textAlign:"center",paddingTop:"2px",cursor:"pointer"}} onClick={handleDelete}>X</div>
                </div>
            </div>
        </div>
    )
}


export default Item;