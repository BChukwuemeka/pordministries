import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp/SignUp";
import Testimonies from "./pages/Testimonies/Testimonies";
import Gallery from "./pages/Gallery/Gallery";
import Activities from "./pages/Activities/Activities";
import ScrollToTop from "./components/ScrollToTopp";



function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <ScrollToTop />
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
          <Switch>
            <Route path='/Activities' exact component={Activities}/>
          </Switch>
          <Switch>
            <Route path='/About' exact component={About}/>
          </Switch>
          <Switch>
            <Route path='/SignUp' exact component={SignUp}/>
          </Switch>
          <Switch>
            <Route path='/services' exact component={Services}/>
          </Switch>
          <Switch>
            <Route path='/testimonies' exact component={Testimonies}/>
          </Switch>
          <Switch>
            <Route path='/gallery' exact component={Gallery}/>
          </Switch>
          
          <Footer/>
        </Router>
      </div>
    </div>
  );
}

export default App;
