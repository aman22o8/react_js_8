// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchinput: ''}

  onChangeofInput = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {searchinput} = this.state
    return (
      <div className="main_container">
        <div className="card_container1">
          <h1 className="main_heading">Calculate the Letters you enter</h1>
          <div>
            <label className="form_heading">
              Enter the phrase <br />{' '}
              <input
                type="text"
                onChange={this.onChangeofInput}
                className="input_box"
                placeholder="Enter the phrase"
              />
            </label>
          </div>

          <p className="button">{`No.of letters: ${searchinput.length}`}</p>
        </div>
        <div className="card_container_2">
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
