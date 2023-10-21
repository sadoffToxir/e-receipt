import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import './TransactionsList.css'

const TransactionsList = (props) => {

  const navigate = useNavigate()

  const goToTransaction = (id) => {
    return navigate(`/transactions/${id}`)
  }

  return (
    <div className='transactions'>
      <div className='transaction'>
        {
          props.transactionsList.map((transaction, index) => {
            return (
              <div className='transaction-info' key={index} onClick={() => goToTransaction(transaction.id)}>
                <p className='company'>{transaction.recipient}</p>
                <p className='amount'>{transaction.amount}$</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

TransactionsList.propTypes = {
  transactionsList: PropTypes.array
}

export default TransactionsList