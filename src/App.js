import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Homework WK4</h1>
          </header>
          <main>

          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
