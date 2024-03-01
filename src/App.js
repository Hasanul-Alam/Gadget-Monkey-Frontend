import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AddProducts from './Components/Add-Products/AddProducts';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/add/products' element={<AddProducts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
