import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { clickHandler } from './actions/Click'
import ModelDetails from './components/ModelDetails'

class App extends React.Component {
  state = {
    value: {
      name: "default",
      manufacturer: "default",
      year: undefined,
      origin: "default"
    },
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
    this.state.data.find((element) => {
      if (element.name === event.target.value) {
        return (
          this.setState({
            value: element
          })
        )
      }
    })
  }

  updateSelection = this.updateSelection.bind(this)

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Homework WK4</h1>
        </header>
        <main>
          <div className="computerModel">
            <h2>Choose a computer model</h2>
            <select value={this.state.value.name} onChange={this.updateSelection}>
              <option value="">
                --pick a model--
                </option>
              {
                this.state.data.map((element) => {
                  return <option key={element.name} value={element.name}>{element.name} ({element.year})</option>
                })
              }
            </select>
            <br />
            <br />
            <button onClick={() => this.props.clickHandler(this.state.value)}>ADD</button>
          </div>
          <ModelDetails arrayOfModels={this.props.arrayOfModels} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    arrayOfModels: reduxState.value
  }
}

export default connect(mapStateToProps, { clickHandler })(App)

