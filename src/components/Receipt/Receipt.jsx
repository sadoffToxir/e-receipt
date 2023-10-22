import PropTypes from 'prop-types'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import receiptCss from './Receipt.module.css'

import { useState } from 'react'

export const Receipt = (props) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }

  const receiptItems = (receipt) => {
    return Object.keys(receipt.items).map((key, index) => {
      return <div key={index}><span>{key}:</span> <span>{receipt.items[key]} zl</span></div>
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={receiptCss.receipt}>
      <h2 className={receiptCss.title}>
        Receipt
      </h2>
      <div className={receiptCss.recipient}>Recipient: {props.receipt.recipient}</div>
      <div className={receiptCss.items}>{ receiptItems(props.receipt) }</div>
      <div className={receiptCss.summarizing}>
        <span>
          VAT:
        </span>
        <span>
          {props.receipt.tax} zl
        </span>
      </div>
      <div className={receiptCss.summarizing}>
        <span>
          TOTAL:
        </span>
        <span>
          {props.receipt.total} zl
        </span>
      </div>
      <div className={receiptCss.downloadReceipt} onClick={handleClick}>
        Download PDF
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Downloaded successfully!
        </Alert>
      </Snackbar>
    </div>
  )
}

Receipt.propTypes = {
  receipt: PropTypes.object
}