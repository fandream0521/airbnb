import { useRoutes } from "react-router-dom";
import { routes } from "./router";

function App() {
  return (
    <div className="app">
      <header className="head">
        header
      </header>
      <main className="content">
        {useRoutes(routes)}
      </main>
      <footer className="foot">
        footer
      </footer>
    </div>
  );
}

export default App;
