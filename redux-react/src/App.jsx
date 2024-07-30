import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainApp from './components/MainApp.jsx'
import './App.css'

function App() { 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React modified with a little Redux!</h1>      
        <MainApp />      
    </>
  )
}

export default App
