import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import Divider from '@mui/material/Divider'

import transactionsList from './TransactionsList.module.css'

const TransactionsList = (props) => {

  const navigate = useNavigate()

  const goToTransaction = (id) => {
    return navigate(`/transactions/${id}`)
  }

  return (
    <div className={transactionsList['transactions-list']}>
      {
        props.transactionsList.map((transaction, index) => {
          return (
            <div className={transactionsList.transaction} key={index}>
              <div className={transactionsList['transaction-details']} onClick={() => goToTransaction(transaction.id)}>
                <p className={transactionsList.company}>{transaction.recipient}</p>
                <p className={transactionsList.amount}>{transaction.amount} zl</p>
              </div>
              {props.transactionsList.length > (index + 1) && <Divider variant='inset' component='div' className={transactionsList.divider} />}
            </div>
          )
        })
      }
    </div>
  )
}

TransactionsList.propTypes = {
  transactionsList: PropTypes.array
}

export default TransactionsList