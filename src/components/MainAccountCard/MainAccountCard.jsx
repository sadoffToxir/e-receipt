import mainAccountCard from './MainAccountCard.module.css'

const MainAccountCard = () => {
  return (
    <div className={mainAccountCard.card}>
      <p className={mainAccountCard['account-number']}>1234 1234 1234 1234</p>
      <div>
        <p className={mainAccountCard.name}>Adilet Baimyrza Uulu</p>
        <p className={mainAccountCard.amount}>1500 zl</p>
      </div>
    </div>
  )
}

export default MainAccountCard