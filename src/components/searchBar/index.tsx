import './styles/styles.css'
import lupa from './assets/lupa.svg'

export const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <input
        className="searchBar-input"
        type="text"
        placeholder="Busque por um desafio"
      />
      <img className="searchBar-icon" src={lupa} alt="Lupa" />
    </div>
  )
}
