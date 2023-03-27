import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import unicorn from "./img/unicorn.png"

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      helpText: "help text",
      userData: ""
    }

    this.inputClick = this.inputClick.bind(this)
  }


  helpText = "Help text!"

  render() {
    return (
      <div className="name">
        <div className="name"></div>     

        <div>
          <Header title="Шапка сайта" name="" />
          <h1>{this.state.helpText}</h1>
          <h2>{this.state.userData}</h2>
          <input placeholder={this.state.helpText} 
            onChange={event => this.setState({ userData: event.target.value })}
            onClick={this.inputClick} 
            onMouseEnter={this.mouseOver} />
          <p>{1+6}</p>
          <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>

          <Image image={unicorn} />
          <img src={unicorn} />
        </div>
      </div>
    )
  }

  inputClick() {
    this.setState({helpText: "Changed"})
    console.log("Clicked")}
  mouseOver() {console.log("Mouse Over")}
}

export default App



