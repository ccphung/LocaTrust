import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Ads from './pages/Ads';
import MessageBox from './pages/MessageBox';
import Contact from './pages/Contact';
import Rating from './pages/Rating';
import Tenant from './pages/Tenant';
import Ad from './pages/Ad';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Router>
      <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/ads" element={<Ads/>} />
            <Route path="/Ad" element={<Ad/>} />
            <Route path="/Tenant" element={<Tenant/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/messagebox" element={<MessageBox/>} />
            <Route path="/Rating" element={<Rating/>} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}


export default App;