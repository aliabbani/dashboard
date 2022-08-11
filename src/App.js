import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">other</div>
      </div>
    </Router>
  );
}

export default App;
