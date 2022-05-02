import './styles/styles.css'
import setaBaixo from './assets/setaBaixo.svg'
import footerLogo from './assets/footerLogo.svg'

export const Footer = () => {
  return (
    <div className="footer-container">
      <img
        className="footer-logo"
        src={footerLogo}
        alt="Green Points logotipo"
      />
      <div className="footer-about">
        <div className="about-info">
          <b>Sobre nós</b>
          <img src={setaBaixo} alt="seta pra baixo" />
        </div>
        <div className="about-info">
          <b>Perguntas frequentes</b>
          <img src={setaBaixo} alt="seta pra baixo" />
        </div>
        <div className="about-info">
          <b>Empresas participantes</b>
          <img src={setaBaixo} alt="seta pra baixo" />
        </div>
        <div className="about-info">
          <b>Quero impactar também</b>
          <img src={setaBaixo} alt="seta pra baixo" />
        </div>
        <div className="about-info">
          <b>Fale conosco</b>
          <img src={setaBaixo} alt="seta pra baixo" />
        </div>
      </div>
      <b className="about-final-text">Created for ProviHack, 2022</b>
    </div>
  )
}
