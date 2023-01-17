import React from 'react';
import './App.css';
import {Routes,useNavigate,Route} from "react-router-dom";
import RouteConst from './utils/RouteConst/RouteConst'
import Login from "./components/Login";
import Home from "./container/Home";
const App: React.FC = () => {
  return (
    <Routes>
        <Route path={RouteConst.LOGIN} element={<Login/>}></Route>
        <Route path={RouteConst.DEFAULT} element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
