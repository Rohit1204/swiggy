import  React,{ Lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Error from './error404'
import LogIn from "../src/Pages/Login/LoginPage"


const Pages = () => (
  <Switch>
  </Switch>
)
const wrappedRoutes = () => (
  <div>
    <div className="container__wrap" style = {{backgroundColor : '#38373f'}}>
      <Route path="/" component={Pages} />
    </div>
  </div>
)

const Router = () => (
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/login" component={LogIn} />
        <Route component={Error} />
      </Switch>
    </main>
)

export default Router
