import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemsList from './components/ItemsList';
import Deleted from './components/Deleted';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header />
          <Router>
            <div>
              <Route path="/" exact={true} component={ItemCreator} />
              <Route path="/" exact={true} component={ItemsList} />
              <Route path="/deleted" exact={true} component={Deleted} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
