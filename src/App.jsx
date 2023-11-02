import { Route, Routes } from 'react-router'
import './App.css'
import User from './components/user/User'
import UserRequestAddQuestion from './components/user/UserRequestAddQuestion'

function App() {
  return (
    <div className='w-full bg-mainbg pt-0'>
        <Routes>
          <Route path='*' element={<User/>}></Route>
          <Route path='/admin' element={<UserRequestAddQuestion/>}></Route>
          
        </Routes>
    </div>
  )
}

export default App