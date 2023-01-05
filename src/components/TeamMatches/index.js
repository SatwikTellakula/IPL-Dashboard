// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamBannerUrl: '', isLoading: true, latestMatchDetails: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/:id`)
    const data = await response.json()
    this.setState({
      teamBannerUrl: data.team_banner_url,
      isLoading: false,
      latestMatchDetails: data.latest_match_details,
    })
  }

  render() {
    const {teamBannerUrl, isLoading, latestMatchDetails} = this.state
    return (
      <div>
        <img src={teamBannerUrl} className="teamBanner" />
        <LatestMatch latestMatch={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
