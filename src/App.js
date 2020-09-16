import React from 'react';
import './App.css';
import {
  Route, 
  Switch,
} from 'react-router-dom';
import {List} from './components/List/List';
import {Create} from './components/Create/Create';
import {Update} from './components/Update/Update';
import {Error} from './components/Error/Error';

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          component={List}
          exact 
        />
        <Route
          path="/create"
          component={Create}
        />
        <Route
          path="/update"
          component={Update}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
