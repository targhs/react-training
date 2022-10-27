import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="dashboard">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
