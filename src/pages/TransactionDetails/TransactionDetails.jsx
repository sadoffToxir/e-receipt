import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'

import transactionsDetails from './TransactionDetails.module.css'
import { fetchTransaction } from '../../services/api/transactions'
import { Receipt } from '../../components/Receipt/Receipt'

export const TransactionDetails = () => {
  const [transaction, setTransaction] = useState(null)
  const [date, setDate] = useState(null)
  const [isReceipt, setIsReceipt] = useState(false)

  let { txId } = useParams()

  const getTransaction = async (id) => {
    const data = await fetchTransaction(id)

    setTransaction(data)
  }

  useEffect(() => {
    if(!transaction && txId) {
      getTransaction(txId)
    }
  }, [])
  
  useEffect(() => {
    if(transaction) {
      const newDate = new Date(transaction.date).toISOString().split('T')[0]
      
      setDate(newDate)
    }
  }, [transaction])

  const getTransactionDetails = (transactionDetails) => {
    return (
      <div className={transactionsDetails['transactions-details']}>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Amount</span>
          <br />
          <span>{transactionDetails.amount} zl</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Date</span>
          <br />
          <span>{date}</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Transaction type</span>
          <br />
          <span>{transactionDetails.transactionType}</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Sender</span>
          <br />
          <span>{transactionDetails.sender}</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Recipient</span>
          <br />
          <span>{transactionDetails.recipient}</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Sender account number</span>
          <br />
          <span>{transactionDetails.senderAccount}</span>
        </div>
        <div>
          <span className={transactionsDetails['transactions-details__title']}>Recipient account number</span>
          <br />
          <span>{transactionDetails.recipientAccount}</span>
        </div>
      </div>
    )
  }

  return (     
    transaction !== null
      ? <>
        {getTransactionDetails(transaction)}
        <div className={transactionsDetails['toggle-receipt']}>
          <Button onClick={() => setIsReceipt(!isReceipt)} variant='contained' color='error' >Toggle Receipt</Button>
        </div>
        <Collapse in={isReceipt}>

          {isReceipt ? <Receipt receipt={transaction.storeReceipt}/> : null} 
        </Collapse>
      </>
      : <CircularProgress />    
  )
}