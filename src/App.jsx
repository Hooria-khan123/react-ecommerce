import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ShopProvider } from './context/ShopContext';
import { Header } from './components/Storefront';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Confirmation } from './pages/Confirmation';
import './style.css';

function AppRoutes() {
  return <><Header/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/product/:id" element={<ProductDetail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/order-confirmation" element={<Confirmation/>}/>
    <Route path="*" element={<main className="empty-state"><h2>That page wandered off.</h2><Link to="/" className="button button-dark">Back home <ArrowRight size={16}/></Link></main>}/>
  </Routes></>;
}

export default function App() {
  return <ShopProvider><BrowserRouter><AppRoutes/></BrowserRouter></ShopProvider>;
}
