// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    Cookies.remove('jwt_token')
    console.log(jwtToken)
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="logoutBtn">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
