import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: uuid(), title, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (title, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title: title } : todo))
    );
  };

  return (
    <todoContext.Provider
      value={{ todos, addTodo, deleteTodo, completeTodo, updateTodo }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
