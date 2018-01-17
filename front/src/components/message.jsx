import React from 'react'

export default class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <ul>
        {this.props.messages.map((msg, idx) => {
            return(
              <li key={idx}>
                {msg}
              </li>
            )
        })}
      </ul>
    )
  }
}
