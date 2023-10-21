import PropTypes from 'prop-types'

import receiptCss from './Receipt.module.css'

export const Receipt = (props) => {

  const receiptItems = (receipt) => {
    return Object.keys(receipt.items).map((key, index) => {
      return <div key={index}><span>{key}:</span> <span>{receipt.items[key]} zl</span></div>
    })
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
    </div>
  )
}

Receipt.propTypes = {
  receipt: PropTypes.object
}