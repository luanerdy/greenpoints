import './styles/styles.css'
import { GlobalHeader } from '../../components/header'
import { Banners } from './components/banners'
import { SearchBar } from '../../components/searchBar'

export const Home = () => {
  return (
    <div className="home-container">
      <main>
        <header>
          <GlobalHeader />
        </header>
        <section className="banners">
          <Banners />
        </section>
        <section className="partnerships">
          <div className="searchBar">
            <SearchBar />
          </div>
        </section>
      </main>
    </div>
  )
}
