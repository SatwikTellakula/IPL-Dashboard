// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl} = teamData
  return (
   <Link to={`/ipl/${id}`} className="item-link">
      <div className="card-container">
        <img src={teamImageUrl} alt="ipl-team" className="ipl-team" />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
