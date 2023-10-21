import classes from './Navbar.module.css'
import logout from '../../assets/logout.svg'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.menu}>Home</div>
      <div className={classes.logout}>
        <img src={logout}></img>
      </div>
    </div>
  )
}

export default Navbar