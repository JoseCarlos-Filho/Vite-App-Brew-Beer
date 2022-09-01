import "./App.css";
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |<Link to="/about">Sobre Nós</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
