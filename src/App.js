import React, {useState, useEffect} from "react";
import Header from "./components/header";
import Form from "./components/Form";
import Todolist from "./components/todolist";
import "./App.css";

const App = () => {

    const intialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(intialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect (() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                   <Header />
                </div>
                <div>
                    <Form 
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                 <TodosList
                 todos={todos} 
                 setTodos={setTodos} 
                 setEditTodo={setEditTodo}
                />
                </div>
            </div>
        </div>
    );
};

export default App;