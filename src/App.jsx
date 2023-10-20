import './App.css'
import MainAccountCard from './components/MainAccountCard'
import FunctionalButtons from './components/FunctionalButtons'
import TransactionsList from './components/TransactionsList/TransactionsList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <MainAccountCard />
      <FunctionalButtons />
      <TransactionsList />
    </div>
  )
}

export default App
