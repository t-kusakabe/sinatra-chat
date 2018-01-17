import React from 'react'

import Message from './message'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      text: ''
    }

    this.changeText = this.changeText.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  changeText(e) {
    this.setState({text: e.target.value})
  }

  sendMessage() {
    this.state.data.push(this.state.text)
    this.setState({data: this.state.data})
  }

  render() {
    return(
      <div>
        <input onChange={this.changeText} autoFocus />
        <button onClick={this.sendMessage}>Send</button>

        <Message messages={this.state.data} />
      </div>
    )
  }
}
