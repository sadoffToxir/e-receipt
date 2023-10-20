import MainAccountCard from '../components/MainAccountCard/MainAccountCard'
import FunctionalButtons from '../components/FunctionalButtons/FunctionalButtons'
import TransactionsList from '../components/TransactionsList/TransactionsList'

export const Home = () => {
  return <div>
    <MainAccountCard />
    <FunctionalButtons />
    <TransactionsList />
  </div>
}