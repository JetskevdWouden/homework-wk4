import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
  state = {
    value: " ",
    data: [
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
  }

  updateSelection(event) {
    this.setState({
      value: event.target.value
    })
  }

  updateSelection = this.updateSelection.bind(this)

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Homework WK4</h1>
          </header>
          <main>
            <div className="computerModel">
              <h2>Choose a computer model</h2>
              <select value={this.state.value} onChange={this.updateSelection}>
                <option value="">
                  --pick a model--
                </option>
                {
                  this.state.data.map((element) => {
                    return <option key={element.name} value={element.name} onClick={this.try}>{element.name} ({element.year})</option>
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
