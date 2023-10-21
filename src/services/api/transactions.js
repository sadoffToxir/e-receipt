import { instance } from './config'

export const fetchTransactionsList = () => {
  return instance.get('/transactions').then((res) => res.data)
}

export const fetchTransaction = (txId) => {
  return instance.get(`/transactions/${txId}`).then((res) => res.data)
}
