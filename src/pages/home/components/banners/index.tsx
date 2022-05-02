import './styles/styles.css'
import cocaCola from './assets/cocaCola.svg'
import pepsi from './assets/pepsi.svg'
import pepsiBottle from './assets/pepsiBottle.svg'
import plastico from './assets/plastico.svg'
import setinha from './assets/setinha.svg'
import caixa from './assets/caixa.svg'
import { useState } from 'react'

export const Banners = () => {
  const [indexImages, setIndexImages] = useState<number>(1)
  const [bannerDesc, setBannerDesc] = useState<string>('')
  const [challengeName, setChallengeName] = useState<string>('')

  return (
    <div className="banners-container">
      <div className="banner-backgrounds">
        {indexImages === 1 && <img src={cocaCola} alt="Banner da Coca-cola" />}
        {indexImages === 2 && (
          <div className="banner">
            <img src={pepsi} alt="Banner da Coca-cola" />
            <img
              className="banner-icon-image"
              src={pepsiBottle}
              alt="Garrafa pepsi"
            />
          </div>
        )}

        {indexImages === 3 && (
          <div className="banner">
            <img src={plastico} alt="Banner da Coca-cola" />
            <img className="banner-icon-image-2" src={caixa} alt="caixa" />
          </div>
        )}
      </div>
      <p className="challenge-description-banner">{bannerDesc}</p>
      <p className="challenge-name-banner">{challengeName}</p>
      <p className="banner-know-more">Saber mais</p>
      <img className="know-more-link" src={setinha} />
      <div className="index-cards">
        <div
          onClick={() => {
            setIndexImages(1)
            setBannerDesc('Conheça o novo desafio da Coca-Cola:')
            setChallengeName('“Sua latinha vale muito!”')
          }}
          className={`card ${indexImages === 1 ? 'activeCard' : ''}`}
        ></div>
        <div
          onClick={() => {
            setIndexImages(2)
            setBannerDesc('Conheça o novo desafio da Pepsi:')
            setChallengeName('“Sua garrafa em troca de um planeta melhor!”')
          }}
          className={`card ${indexImages === 2 ? 'activeCard' : ''}`}
        ></div>
        <div
          onClick={() => {
            setIndexImages(3)
            setBannerDesc(
              'Junte 1kg de plástico  e troque por descontos em compras',
            )
            setChallengeName('')
          }}
          className={`card ${indexImages === 3 ? 'activeCard' : ''}`}
        ></div>
      </div>
    </div>
  )
}
