import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import TodoContextProvider from "./context/todoContext";

ReactDOM.render(
  <ChakraProvider>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
