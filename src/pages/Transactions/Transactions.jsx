import { useState, useEffect } from 'react'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import { fetchTransactionsList } from '../../services/api/transactions'

export const Transactions = () => {
  const [transactionsList, setTransactionsList] = useState([])
  
  const getTransactionsList = async () => {
    const data = await fetchTransactionsList()

    setTransactionsList(data)
  }
  
  useEffect(() => {
    getTransactionsList()
  }, [])

  return <div>
    <TransactionsList transactionsList={transactionsList}/>
  </div>
}