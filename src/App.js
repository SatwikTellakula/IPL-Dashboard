import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TeamCard from './components/TeamCard'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamMatches} />
    </Switch>
  </BrowserRouter>
)

export default App
