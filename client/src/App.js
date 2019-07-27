import React,{useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemLists';
import AddTodoForm from './components/AddTodoForm';

function App() {

  const [todos,setTodos] = useState([])
  useEffect(() => {
      fetch("/todos/items")
          .then((res) => res.json())
          .then((data) => setTodos(data.todos))
  },[])

  const addTodo = (obj) => {
    setTodos([...todos, obj])
  }

  return (
    <div className="App">
      <Navbar />
      <ItemList todos={todos}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
