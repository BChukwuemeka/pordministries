import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <GlobalStyle/>
          <Navbar/>
        </Router>
      </div>
    </div>
  );
}

export default App;
