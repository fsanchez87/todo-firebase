import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db } from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";
import "./Todo.css";

export const Todo = ({ todo, id }) => {
  const handleDelete = async () => {
    const todoDocRef = doc(db, "todos", id);
    try {
      await deleteDoc(todoDocRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo} secondary={todo} />
      </ListItem>
      <DeleteForeverIcon fontSize="large" onClick={handleDelete} />
    </List>
  );
};
