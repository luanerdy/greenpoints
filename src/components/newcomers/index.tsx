import './styles/styles.css'
import setinha from './assets/setinha.svg'
import reciclamais from './assets/reciclamais.svg'
import lightning from './assets/lightning.svg'

export const NewComers = () => {
  return (
    <div className="newComers-container">
      <div className="newComers-top">
        <h1>Recém-chegados</h1>
        <div className="newComers-show-more">
          <b>Ver todos</b>
          <img src={setinha} alt="setinha" />
        </div>
      </div>
      <div className="newComers-info">
        <div className="newComers">
          <img src={reciclamais} alt="Recicla+" />
          <span>Recicla+</span>
          <p>criado por: ifood</p>
          <div className="newComers-points">
            <img src={lightning} alt="pontos" />
            <span>300 pontos</span>
          </div>
          <button>Saber mais</button>
        </div>
        <div className="newComers">
          <img src={reciclamais} alt="Recicla+" />
          <span>Recicla+</span>
          <p>criado por: ifood</p>
          <div className="newComers-points">
            <img src={lightning} alt="pontos" />
            <span>300 pontos</span>
          </div>
          <button>Saber mais</button>
        </div>
      </div>
    </div>
  )
}
