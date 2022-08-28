import logo from './logo.svg';



import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar  from './Components/Navbar';
import Login from './Components/Login';
import Agencies from './Components/Agencies';
import Contact from './Components/Contact';
import Customers from './Components/Customers';
import Features from './Components/Features';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import Resources from './Components/Resources';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      {/* <Agencies/> */}
      {/* <Contact/> */}
      {/* <Customers/> */}
      {/* <Features/> */}
      {/* <Gallery/> */}
      {/* <Pricing/> */}
      {/* <Resources/> */}
      <AllRoutes/>

     {/* <Home/> */}
     {/* <Login/> */}
     <Navbar/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
