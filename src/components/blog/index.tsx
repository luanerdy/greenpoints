import './styles/styles.css'
import setinha from './assets/setinha.svg'
import fotoBlog from './assets/fotoBlog.svg'

export const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-top">
        <h1>Nosso Blog</h1>
        <div className="blog-show-more">
          <b>Ver todos os artigos</b>
          <img src={setinha} alt="setinha" />
        </div>
      </div>
      <div className="blog-info">
        <div className="blog">
          <img src={fotoBlog} alt="Materia do blog" />
          <span className="blog-date">12/04/2022</span>
          <span className="blog-description">
            Papel pode ser reciclado até 7 vezes! Como a reciclagem do seu lixo
            é feita
          </span>
        </div>
        <div className="blog">
          <img src={fotoBlog} alt="Materia do blog" />
          <span className="blog-date">12/04/2022</span>
          <span className="blog-description">
            Papel pode ser reciclado até 7 vezes! Como a reciclagem do seu lixo
            é feita
          </span>
        </div>
      </div>
    </div>
  )
}
