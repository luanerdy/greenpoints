import { useState } from 'react'
import { Main } from './assets/Routes/Routes'
import { GlobalStyles } from './assets/styles/GlobalStyles'
import { Home } from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Main />
      
    </div>
  )
}

export default App
