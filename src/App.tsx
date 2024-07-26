import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home/Home";
import Transactions from "./features/transactions/Transactions";
import Income from "./features/income/Income";
import Expenses from "./features/expenses/Expenses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
