import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import Transactions from "./features/transactions/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;
