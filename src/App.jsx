import './App.css'
import MainAccountCard from './components/MainAccountCard/MainAccountCard'
import FunctionalButtons from './components/FunctionalButtons/FunctionalButtons'
import TransactionsList from './components/TransactionsList/TransactionsList'
import Navbar from './components/Navbar/Navbar'

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
