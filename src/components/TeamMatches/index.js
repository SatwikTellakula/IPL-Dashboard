// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/:id`)
    const data = await response.json()
  }
  render() {
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    return (
      <div>
        <img src={teamBannerUrl} className="teamBanner" />
        <LatestMatch latestMatch={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
