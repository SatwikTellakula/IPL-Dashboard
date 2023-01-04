// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamsData = data.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="dash-board">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="img-specifications"
          />
          <h1>IPL Dashboard</h1>
          <div className="teams-list-container">
            {isLoading ? (
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            ) : (
              teamsData.map(item => <TeamCard teamData={item} key={item.id} />)
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
