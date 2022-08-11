import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
