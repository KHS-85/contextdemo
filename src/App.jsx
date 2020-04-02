import React from 'react';
import NyhedContextProvider from './context/NyhedContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Nyheder from './components/Nyheder';
import Nyhed from './components/Nyhed'
import OpretNyhed from './components/OpretNyhed';
import Home from './components/Home';

import ProduktContextProvider from './context/ProduktContext';
import Produkter from './components/Produkter';
import Produkt from './components/Produkt'
import OpretProdukt from './components/OpretProdukt';



import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
    <NyhedContextProvider>
    <ProduktContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/nyheder" component={Nyheder} />
          <Route path="/nyhed/:nyhedsid" component={Nyhed} />
          <Route path="/opretnyhed" component={OpretNyhed} />

          <Route path="/produkter" component={Produkter} />
          <Route path="/produkt/:produktsid" component={Produkt} />
          <Route path="/opretprodukt" component={OpretProdukt} />
        </div>
      </BrowserRouter>
    </ProduktContextProvider>
    </NyhedContextProvider>
    </div>
  );
}

export default App;
