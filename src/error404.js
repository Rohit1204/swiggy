import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Error extends Component {
  render() {
    return (
      <div>
        <h1>Error 404</h1>
        <div className="" style={{ fontSize: '25px', fontWeight: '500', color: '#4583ff ' }}>
          <Link to="/login/">Click here to go back to home page</Link>
        </div>
      </div>
    )
  }
}

export default Error