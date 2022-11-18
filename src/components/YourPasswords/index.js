import './index.css'

const YourPasswords = props => {
  const {eachDetails} = props
  const {username, password, website} = eachDetails
  return (
    <li>
      <p>{username}</p>
      <p>{password}</p>
      <p>{website}</p>
    </li>
  )
}

export default YourPasswords
