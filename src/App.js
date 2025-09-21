import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OrderList from "./pages/OrderList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
