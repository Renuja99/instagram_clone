import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import {listUsers} from './actions/userActions'
import { Outlet} from 'react-router-dom'

function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(()=>{
    dispatch(listUsers())
  }, [])

  return (
    
      <div className="App">
      <header className="App-header">
        <Outlet/>
      </header>
    </div>
    
  )
}

export default App
