import React from 'react';
import {ShopItem} from './components/ShopItem'
import { ShopItemModel } from './models/ShopItemModel';

function App() {

  const item = new ShopItemModel();
  
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItem item={item} />
      </div>
    </div>
  );

}

export default App;
