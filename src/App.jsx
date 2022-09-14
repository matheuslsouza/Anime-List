
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">Anime List</Link>
        </h2>
      </nav>
      <h2>
      <Link to="/anime/1">Anime</Link>
      <Link to="/searc">Search</Link>
      </h2>
      <Outlet />
    </div>
  )
}

export default App
