import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Auth from "./Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/aot">
        <div className="main">
          <Auth />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
