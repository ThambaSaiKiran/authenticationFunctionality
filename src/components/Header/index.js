// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  </div>
)

export default Header
