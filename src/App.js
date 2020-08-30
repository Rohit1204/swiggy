import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Router from './Router'
import ScrollToTop from './ScrollToTop'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      loaded: false
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false })
      setTimeout(() => this.setState({ loaded: true }), 500)
    })
      const script = document.createElement("script");
  
  
      document.body.appendChild(script);
    
  }

  render() {
    const { loaded, loading } = this.state
    return (
      <BrowserRouter style = {{backgroundColor : '#3a3a3a'}}>
        <ScrollToTop>
          {!loaded && (
            <div className={`load${loading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
          )}
          <div >
            <Router />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
