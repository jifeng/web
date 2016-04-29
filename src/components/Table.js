import React, { Component, PropTypes } from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {store} = this.props
    var inputValue = this.refs.myTextInput.value;
    store.dispatch({ type: 'change', id: inputValue })

  }

  render() {
  	const { value } = this.props;
    return (
     <div>
        <p>输入值: {value}</p>
        <input type="text" ref="myTextInput" />
        <input type="button" value="button" onClick={this.handleClick} />
      </div>

    )
  }
}



export default Table