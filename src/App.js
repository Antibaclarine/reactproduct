import logo from './logo.svg';
import './App.css';
import Products from './Productpage';
import Login from './Loginpage';
import Navigationbar from './Navigationbar/navigation';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';



function App() {

  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        
        
        
      </Routes>
      </BrowserRouter>
      <ProductDetails/>
      </div>
  );
}

export default App;
