import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import YourPasswords from '../YourPasswords'

const passwordList = []

class PasswordManager extends Component {
  state = {
    initialPasswordList: passwordList,
    website: '',
    username: '',
    password: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAdd = () => {
    const {website, username, password} = this.state

    const item = {
      id: v4(),
      website,
      username,
      password,
    }

    const newList = [...passwordList, item]
    this.setState({
      initialPasswordList: newList,
      website: '',
      username: '',
      password: '',
    })
  }

  render() {
    const {initialPasswordList} = this.state
    return (
      <div className="bg-container">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="container">
          <div className="card">
            <form>
              <h1>Add New Password</h1>
              <div className="input-box">
                <img
                  className="small-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-box">
                <img
                  className="small-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-box">
                <img
                  className="small-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="paswword"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="button-container">
                <button
                  className="button"
                  type="submit"
                  onClick={this.onClickAdd}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="search-container">
            <h1>Your Passwords</h1>
            <div className="search-box">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" />
            </div>
          </div>
          <hr />
          <div>
            <p>check box</p>
          </div>
          <div className="component">
            <ul>
              {initialPasswordList.map(each => (
                <YourPasswords key={each.id} eachDetails={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
