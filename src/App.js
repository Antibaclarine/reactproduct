import logo from './logo.svg';
import './App.css';
import Products from './Productpage';
import Login from './Loginpage';
import Navigationbar from './Navigationbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import AddProduct from './Addproduct';


function App() {

  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
