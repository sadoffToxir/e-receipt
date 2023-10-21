import { useNavigate } from 'react-router-dom'

import classes from './Navbar.module.css'
import logout from '../../assets/logout.svg'

const Navbar = () => {
  const navigate = useNavigate()

  const redirectTo = (route) => {
    navigate(route)
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.menu} onClick={() => {redirectTo('/')}}>Home</div>
      <div className={classes.logout}>
        <img src={logout}></img>
      </div>
    </div>
  )
}

export default Navbar