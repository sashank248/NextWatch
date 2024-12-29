import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {LoginButton} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    shwpass: false,
    shwErrMsg: false,
    errMsg: '',
  }

  formSubmit = event => {
    event.preventDefault()
    this.login()
  }

  onSuccess = data => {
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    this.setState({shwErrMsg: false, errMsg: ''})
    const {history} = this.props
    history.replace('/')
    console.log(data.jwt_token)
  }

  onFail = data => {
    this.setState({shwErrMsg: true, errMsg: data.error_msg})
  }

  login = async () => {
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data)
    } else {
      this.onFail(data)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeStatus = () => {
    const {shwpass} = this.state
    this.setState({shwpass: !shwpass})
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const loginCon = isDark ? 'login-con-dark' : 'login-con-light'
          const loginCard = isDark ? 'login-card-dark' : 'login-card-light'
          const loginLabel = isDark ? 'login-label-dark' : 'login-label-light'
          const loginInput = isDark ? 'login-input-dark' : 'login-input-light'
          const logoImg = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const {username, password, shwpass, shwErrMsg, errMsg} = this.state
          return (
            <div className={loginCon}>
              <div className={loginCard}>
                <form className="form-con" onSubmit={this.formSubmit}>
                  <img src={logoImg} alt="website logo" className="logo" />
                  <div className="inputs">
                    <div className="input-con">
                      <label htmlFor="username" className={loginLabel}>
                        {' '}
                        USERNAME{' '}
                      </label>
                      <input
                        value={username}
                        type="text"
                        placeholder="Username"
                        className={loginInput}
                        id="username"
                        onChange={this.changeUsername}
                      />
                    </div>
                    <div className="input-con">
                      <label htmlFor="password" className={loginLabel}>
                        {' '}
                        PASSWORD{' '}
                      </label>
                      <input
                        value={password}
                        type={shwpass ? 'text' : 'password'}
                        placeholder="Password"
                        className={loginInput}
                        id="password"
                        onChange={this.changePassword}
                      />
                    </div>
                    <div className="shw-pass-con">
                      <input
                        type="checkbox"
                        id="showPassword"
                        onChange={this.changeStatus}
                      />
                      <label className={loginLabel} htmlFor="showPassword">
                        {' '}
                        Show Password{' '}
                      </label>
                    </div>
                  </div>
                  <LoginButton type="submit">Login</LoginButton>
                  {shwErrMsg && <p className="errmsg">*{errMsg}</p>}
                </form>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
