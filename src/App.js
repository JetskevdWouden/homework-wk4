import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'


class App extends React.Component {

  render() {
    const data = [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Homework WK4</h1>
          </header>
          <main>
            <div className="computerModel">
              <h2>Choose a computer model</h2>
              {console.log("THIS DATA", data[0].name)}
              <select>
                <option value="">
                  --pick a model--
                </option>
                {
                  data.map((element) => {
                    return <option value={element.name}>{element.name} ({element.year})</option>
                  })
                }
              </select>
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
