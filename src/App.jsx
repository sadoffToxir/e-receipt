import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { TransactionDetails } from './pages/TransactionDetails/TransactionDetails'
import { Transactions } from './pages/Transactions/Transactions'

function App() {
  return (
    <div className='app'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='transactions/:txId' element={<TransactionDetails />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App
