import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <GlobalStyle/>
          <ScrollToTop/>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/sign-Up" exact component={SignUp}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
