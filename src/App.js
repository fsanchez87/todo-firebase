import { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";

import "./App.css";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    "Hacer proyecto React Firebase",
    "Grabar proyecto React",
  ]);

  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
      <div className="App">
        <h1>TODO React Firebase</h1>
        <form>
          <FormControl>
            <InputLabel>Escribe una tarea</InputLabel>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <Button
              type="submit"
              onClick={addTodo}
              variant="contained"
              color="primary"
              disabled={!input}
            >
              Añada una tarjeta
            </Button>
          </FormControl>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
  );
}

export default App;
