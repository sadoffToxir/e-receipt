import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { TransactionDetails } from './pages/TransactionDetails'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <div className='app'>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='transactions/:txId' element={<TransactionDetails />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
