import './App.css'
import Button from './components/Button/Button'
import UseDefereValue from './components/Hooks/UseDefereValue'
import UseImperative from './components/Hooks/UseImperative'
import UseTransition from './components/Hooks/useTransition'
import Memo from './components/Memo/Memo'
import UseMemos from './components/useMemo/UseMemo'

function App() {
  // JSX
  return (
    <div className='App'>
      <Button />
      {/* <Memo /> */}
      {/* <UseMemos /> */}
      {/* <UseImperative /> */}
      {/* <UseDefereValue /> */}
      <UseTransition />
    </div>
  )
}

export default App
