import React, { Component, PropTypes } from 'react'

class Img extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {value} = this.props;
    var id = value || 'I0001';
    var src = "http://work.alibaba-inc.com/photo/" + id+ ".jpg"
    return (
      <div><img src={src} /></div>
    );
  }
}



export default Img