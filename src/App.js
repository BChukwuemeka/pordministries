import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
