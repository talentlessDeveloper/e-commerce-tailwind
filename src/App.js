<<<<<<< HEAD
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import  SignUp from './pages/SignUp';
import  Layout  from './pages/Layout';
=======
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./pages/Layout";
import Header from "./components/Header/Header";
>>>>>>> d25b8093df1683a07c1b6fad9307b034d6143b64

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
