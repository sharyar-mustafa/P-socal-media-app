import logo from './logo.svg';
import './App.css';
import Hader from './component/Hader';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Login from './component/Login';

function App() {
  return (
    <Router >
      <Hader/>

      <Routes>
      <Route path="/" element ={<Login/>} />
      </Routes>
     

    </Router>
  );
}

export default App;
