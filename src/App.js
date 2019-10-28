import React from 'react';
import Home from './components/Home';
import Favorites from './components/Favorites';
import NavLinks from './components/NavLinks';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavLinks/>
      <Route exact path="/" component={Home}/>
      <Route path="/favorites" component={Favorites}/>
    </BrowserRouter>
  );
}

export default App;
