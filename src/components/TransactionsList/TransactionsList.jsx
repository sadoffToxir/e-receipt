import './TransactionsList.css'

const TransactionsList = () => {
  return (
    <div className='transactions'>
      <div className='transaction'>
        <div className='transaction-info'>
          <p className='company'>Commerzbank</p>
          <p className='amount'>-150$</p>
        </div>
        <div className='transaction-details'>
          <p className='transaction-type'>By Card</p>
          <p className='transaction-receipt'> View Receipt</p>
        </div>
      </div>
      <div className='transaction'>
        <div className='transaction-info'>
          <p className='company'>Commerzbank</p>
          <p className='amount'>-150$</p>
        </div>
        <div className='transaction-details'>
          <p className='transaction-type'>By Card</p>
          <p className='transaction-receipt'> View Receipt</p>
        </div>
      </div>
      <div className='transaction'>
        <div className='transaction-info'>
          <p className='company'>Commerzbank</p>
          <p className='amount'>-150$</p>
        </div>
        <div className='transaction-details'>
          <p className='transaction-type'>By Card</p>
          <p className='transaction-receipt'> View Receipt</p>
        </div>
      </div>
      <div className='transaction'>
        <div className='transaction-info'>
          <p className='company'>Commerzbank</p>
          <p className='amount'>-150$</p>
        </div>
        <div className='transaction-details'>
          <p className='transaction-type'>By Card</p>
          <p className='transaction-receipt'> View Receipt</p>
        </div>
      </div>

    </div>
  )
}

export default TransactionsList