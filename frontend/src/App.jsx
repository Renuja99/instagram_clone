import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './App.css'
import {listUsers} from './actions/userActions'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(()=>{
    dispatch(listUsers())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  )
}

export default App
