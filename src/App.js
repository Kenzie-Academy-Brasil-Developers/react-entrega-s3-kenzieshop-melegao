import { useState } from 'react';
import './App.css';
import BodyContainer from './components/body';
import Cart from './components/cart';
import Header from './components/header';

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <div>
      <Header setShowCart={setShowCart}/>
      <BodyContainer />
      {showCart && <Cart setShowCart={setShowCart}/>}
    </div>
  );
}

export default App;
