import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {typeInput: ''}

  onChangeInput = event => {
    this.setState({typeInput: event.target.value})
  }

  render() {
    const {typeInput} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="typeInput">Enter the phrase</label>
            <input
              type="text"
              id="typeInput"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <p>No. of letters: {typeInput.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
