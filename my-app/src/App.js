import logo from './logo.svg';
import './App.css';
import Hader from './component/Hader';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Login from './component/Login';
import { LoadeUser } from './Actiion/User';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react"
import Home from './component/Home';

function App() {
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(LoadeUser());
  
  }, [])


  const {isAuthenticated} = useSelector((state)=>state.user);
  


  return (
    <Router >
      {isAuthenticated && <Hader/>}

      <Routes>
      <Route path="/" element ={isAuthenticated==true  ?<Home/>: <Login/>} />
      </Routes>
     

    </Router>
  );
}

export default App;
