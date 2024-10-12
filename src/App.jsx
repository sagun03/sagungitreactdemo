import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewFeatureComponent from './components/NewFeatureComponent'

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
        <h1>Welcome to reactSagun Project</h1>
      </div>
      <NewFeatureComponent />
    </>
  )
}

export default App
