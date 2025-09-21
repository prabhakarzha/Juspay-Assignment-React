import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OrderList from "./pages/OrderList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </Router>
  );
}

export default App;
