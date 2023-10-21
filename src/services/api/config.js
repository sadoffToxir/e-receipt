import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://ereceiptcore-001-site1.atempurl.com'
})
