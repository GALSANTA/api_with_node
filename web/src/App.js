import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './pages/List';
import Edit from './pages/Edit';

function App() {



  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
      <div className="fixed-action-btn">
        <button className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </button>
      </div>
    </>
  );
}

export default App;
