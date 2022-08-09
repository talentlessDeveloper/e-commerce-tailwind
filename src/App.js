import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import  SignUp from './pages/SignUp';
import  Layout  from './pages/Layout';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route/>
    </Routes>
   </>
  );
}

export default App;
