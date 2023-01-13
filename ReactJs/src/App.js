import './App.css'
import Button from './components/Button/Button'
import UseImperative from './components/Hooks/UseImperative'
import Memo from './components/Memo/Memo'
import UseMemos from './components/useMemo/UseMemo'

function App() {
  // JSX
  return (
    <div className='App'>
      <Button />
      {/* <Memo /> */}
      {/* <UseMemos /> */}
      <UseImperative />
    </div>
  )
}

export default App
