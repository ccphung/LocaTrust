import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Inscription from './pages/Inscription';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/inscription" element={<Inscription/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
  );
}


export default App;