import './App.scss'
import Home from './pages/Home/Home'
import Watch from './pages/Watch/Watch'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'

function App() {
  const user = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App;
