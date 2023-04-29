import { BrowserRouter ,Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound/NotFound";
import More from "./pages/More/More";





function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyle />
          <Navbar/>
        <Routes>
          
          
    
            <Route path='/' element={<Home/>}/>
            <Route path='/Activities' element={<Activities/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/testimonies' element={<Testimonies/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/more' element={<More/>}/>
            <Route path='/*' element={<NotFound/>} />
      

          
          
          </Routes>
          <Footer/>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
