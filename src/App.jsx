import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
