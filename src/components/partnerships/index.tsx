import './styles/styles.css'
import setinha from './assets/setinha.svg'
import ifood from './assets/ifood.svg'
import stone from './assets/stone.svg'
import cit from './assets/cit.svg'

export const Partnerships = () => {
  return (
    <div className="partnerships-container">
      <div className="partnerships-top">
        <h1>Nossas parceirias</h1>
        <div className="partnerships-show-more">
          <b>Ver todas</b>
          <img src={setinha} alt="setinha" />
        </div>
      </div>
      <div className="partnerships-icons">
        <img src={ifood} alt="Ifood" />
        <img src={stone} alt="stone" />
        <div className="cit">
          <img src={cit} alt="CIT" />
          <b>CI&T</b>
        </div>
      </div>
    </div>
  )
}
