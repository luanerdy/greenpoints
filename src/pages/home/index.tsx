import './styles/styles.css'
import { GlobalHeader } from '../../components/header'
import { Banners } from './components/banners'

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
      </main>
    </div>
  )
}
