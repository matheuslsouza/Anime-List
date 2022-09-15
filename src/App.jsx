import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h2> Animes list</h2>
      <Outlet />
    </div>
  );
}

export default App;
