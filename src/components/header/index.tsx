import './styles/styles.css'
import gpLogo from './assets/gpLogo.svg'
import notification from './assets/notification.svg'
import burguer from './assets/burguer.svg'

export const GlobalHeader = () => {
  return (
    <div className="header-container">
      <div className="logo-and-app-name-container">
        <img src={gpLogo} alt="GP-logo" />
        <b>Green Points</b>
      </div>
      <div className="header-right-icons-container">
        <img src={notification} alt="GP-logo" />
        <img src={burguer} alt="GP-logo" />
      </div>
    </div>
  )
}
