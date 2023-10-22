import { instance } from './config'

export const fetchTransactionsList = () => {
  return instance.get('/transactions').then((res) => res.data)
}

export const fetchTransaction = (txId) => {
  return instance.get(`/transactions/${txId}`).then((res) => res.data)
}

export const getReceiptPdfUrl = (receiptId) => {
  return `http://ereceiptcore-001-site1.atempurl.com/GeneratePdf/${receiptId}`
}