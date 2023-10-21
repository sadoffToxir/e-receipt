import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import transactionsDetails from './TransactionDetails.module.css'
import { fetchTransaction } from '../../services/api/transactions'

export const TransactionDetails = () => {
  const transactionMock = {
    amount: 61.8,
    sender: 'Butter',
    senderAccount: 1234567890,
    recipientAccount: 1234567890,
    id: 'a070f7a6-1c5f-4a4c-b936-7060a05be388',
    transactionType: 'Expense',
    recipient: 'Costco',
    date: '2023-10-20T20:59:12.539695+02:00',
    receipt: {
      id: 'a070f7a6-1c5f-4a4c-b936-7060a05be3d9',
      recipient: 'Costco',
      items: {
        'Torilla Chips': 9.99,
        Salsa: 7.99,
        'Sour Cream': 5.99,
        Cheese: 4.99,
        'Ground Beef': 9.99,
        Tortillas: 3.99,
        Lettuce: 2.99,
        Tomatoes: 3.99,
        Onions: 2.99,
        Avocado: 1.99,
        Limes: 1.99,
        Cilantro: 1.99,
        Garlic: 2.99
      },
      date: '2023-10-20T20:59:12.539695+02:00',
      total: 61.88,
      tax: 7.4
    }
  }

  const [transaction, setTransaction] = useState(transactionMock)
  const [date, setDate] = useState(null)

  let { txId } = useParams()

  const getTransaction = async (id) => {
    const data = await fetchTransaction(id)

    console.log(data)

    setTransaction(data)
  }

  useEffect(() => {
    getTransaction(txId)

    const newDate = new Date(transaction.date).toISOString().split('T')[0]
    setDate(newDate)
  }, [])

  return <div className={transactionsDetails['transactions-details']}>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Amount</span>
      <br />
      <span>{transaction.amount}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Date</span>
      <br />
      <span>{date}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Transaction type</span>
      <br />
      <span>{transaction.transactionType}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Sender</span>
      <br />
      <span>{transaction.sender}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Recipient</span>
      <br />
      <span>{transaction.recipient}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Sender account number</span>
      <br />
      <span>{transaction.senderAccount}</span>
    </div>
    <div>
      <span className={transactionsDetails['transactions-details__title']}>Recipient account number</span>
      <br />
      <span>{transaction.recipientAccount}</span>
    </div>
  </div>
}