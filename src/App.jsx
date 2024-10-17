import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App