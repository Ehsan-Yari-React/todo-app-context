import TodoContextProvider from "./context/todoContext";
import AddTodo from "./components/AddTodo";
import { VStack } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <VStack p={12}  minH="100vh" justify="flex-start">
      <AddTodo />
      <TodoList />
    </VStack>
  );
};

export default App;
