import classes from './FunctionalButtons.module.css'
import transfer from '../../assets/transfer.svg'
import tickets from '../../assets/tickets.svg'
import qr from '../../assets/qr.svg'

const FunctionalButtons = () => {
  return (
    <div className={classes.buttons}>
      <div className={classes['button-circle']}>
        <div className={classes.illustration}>
          <img className={classes.svg} src={qr}></img>
        </div>
        <p className={classes['illustration-desc']}>Scan and Pay</p>
      </div>

      <div className={classes['button-circle']}>
        <div className={classes.illustration}>
          <img className={classes.svg} src={transfer}></img>
        </div>
        <p className={classes['illustration-desc']}>Transfer</p>
      </div>

      <div className={classes['button-circle']}>
        <div className={classes.illustration}>
          <img className={classes.svg} src={tickets}></img>
        </div>
        <p className={classes['illustration-desc']}>Tickets</p>
      </div>
    </div>
  )
}

export default FunctionalButtons