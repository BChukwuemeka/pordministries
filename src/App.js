import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import Activities from "./pages/Activities/Activities";



function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
          <Switch>
            <Route path='/Activities' exact component={Activities}/>
          </Switch>
          <Switch>
            <Route path='/Products' exact component={Products}/>
          </Switch>
          <Switch>
            <Route path='/SignUp' exact component={SignUp}/>
          </Switch>
          <Switch>
            <Route path='/services' exact component={Services}/>
          </Switch>
          
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
