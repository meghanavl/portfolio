import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <HashRouter>
      <Navbar />
      <Home />
      </HashRouter>
    </div>
  );
}

export default App;