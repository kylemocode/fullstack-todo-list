import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemLists';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <AddTodoForm />
    </div>
  );
}

export default App;
