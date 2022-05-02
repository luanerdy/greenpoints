import './styles/styles.css'
import setinha from './assets/setinha.svg'
import reciclamais from './assets/reciclamais.svg'
import lightning from './assets/lightning.svg'

export const ChallengesHighlights = () => {
  return (
    <div className="challengesHighlights-container">
      <div className="challengesHighlights-top">
        <h1>Desafios em destaque</h1>
        <div className="challengesHighlights-show-more">
          <b>Ver todos</b>
          <img src={setinha} alt="setinha" />
        </div>
      </div>
      <div className="challengesHighlights-info">
        <div className="challenge">
          <img src={reciclamais} alt="Recicla+" />
          <span>Recicla+</span>
          <p>criado por: ifood</p>
          <div className="challenge-points">
            <img src={lightning} alt="pontos" />
            <span>300 pontos</span>
          </div>
          <button>Saber mais</button>
        </div>
        <div className="challenge">
          <img src={reciclamais} alt="Recicla+" />
          <span>Recicla+</span>
          <p>criado por: ifood</p>
          <div className="challenge-points">
            <img src={lightning} alt="pontos" />
            <span>300 pontos</span>
          </div>
          <button>Saber mais</button>
        </div>
      </div>
    </div>
  )
}
