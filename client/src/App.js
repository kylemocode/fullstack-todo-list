import React,{useEffect,useState} from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemLists';
import AddTodoForm from './components/AddTodoForm';
import TodoContextProvider from './contexts/TodoContext';

function App() {


  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <ItemList/>
        <AddTodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
