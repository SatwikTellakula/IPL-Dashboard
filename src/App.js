import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import TeamCard from './components/TeamCard'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/ipl/:id" component={TeamCard} />
    </Switch>
  </BrowserRouter>
)

export default App
