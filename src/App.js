import { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import { Todo } from "./Todo";
import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTodos(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[input])

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "todos"), {
        todo: input,
        timestamp: Timestamp.now(),
      });
    } catch (error) {
      alert(error.message);
    }
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
          <Todo id={todo.id} key={todo.id} todo={todo.data.todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
