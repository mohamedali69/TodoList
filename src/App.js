import React, {useState} from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Mohamed Ali Todo's List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
      
    </div>
  );
}
export default App;
