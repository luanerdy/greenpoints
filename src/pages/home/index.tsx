import './styles/styles.css'
import { GlobalHeader } from '../../components/header'
import { Banners } from './components/banners'
import { SearchBar } from '../../components/searchBar'
import { Partnerships } from '../../components/partnerships'
import { ChallengesHighlights } from '../../components/challengesHighlights'
import { Blog } from '../../components/blog'

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
          <div className="partnerships-main">
            <Partnerships />
          </div>
          <div className="challenges-main">
            <ChallengesHighlights />
          </div>
          <div className="blog-main">
            <Blog />
          </div>
        </section>
      </main>
    </div>
  )
}
