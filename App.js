import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import Signup from './component/signup';
import Admin from './pages/admin';
import Home from './pages/home';
import MyCart from './pages/mycart';
import Property from './pages/showproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:param" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/showproduct/:email' element={<Property />} />
          <Route path='/mycart' element={<MyCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
