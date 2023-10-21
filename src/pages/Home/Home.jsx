import { useState, useEffect } from 'react'

import MainAccountCard from '../../components/MainAccountCard/MainAccountCard'
import FunctionalButtons from '../../components/FunctionalButtons/FunctionalButtons'
import TransactionsList from '../../components/TransactionsList/TransactionsList'
import { fetchTransactionsList } from '../../services/api/transactions'

export const Home = () => {  
  const [transactionsList, setTransactionsList] = useState([])
  
  const getTransactionsList = async () => {
    const data = await fetchTransactionsList()

    setTransactionsList(data)
  }
  
  useEffect(() => {
    getTransactionsList()
  }, [])

  return <div>
    <MainAccountCard />
    <FunctionalButtons />
    <TransactionsList transactionsList={transactionsList} />
  </div>
}