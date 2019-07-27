import React,{useState} from 'react';
import axios from 'axios';



export default function AddTodoForm(props) {

    const [item, setItem] = useState("");
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/todos/create',{
            item,
            author
        })
        .then((res) => {
            alert("新增成功,請重整頁面")
        })
        .catch((err) => console.log('something wrong'))
        
    }
        

    const itemChange = (e) => {
        setItem(e.target.value)
    }
    const authorChange = (e) => {
        setAuthor(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container" style={{marginTop: "20px",marginBottom: "30px"}}>
                <div class="form-group">
                    <label for="exampleInputEmail1">待辦事項</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="item" aria-describedby="emailHelp" placeholder="Enter todo..." onChange={itemChange} value={item}/>
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">填寫者</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="author" placeholder="author..." onChange={authorChange} value={author}/>
                </div>
                <button type="submit" class="btn btn-primary">新增</button>
            </form>
        </div>
    )
}
