import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import AppFooter from "./components/app-footer";

function App() {
  return (
    <div className="app">
      <main className="content">
        {useRoutes(routes)}
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
