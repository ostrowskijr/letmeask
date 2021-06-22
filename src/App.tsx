import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/global.scss';
import './services/firebase';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
