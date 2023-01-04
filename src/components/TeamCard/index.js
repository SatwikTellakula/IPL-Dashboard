// Write your code here
const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl} = teamData
  return (
    <div className="card-container">
      <img src={teamImageUrl} alt="ipl-team" />
      <h1>{name}</h1>
    </div>
  )
}
export default TeamCard
