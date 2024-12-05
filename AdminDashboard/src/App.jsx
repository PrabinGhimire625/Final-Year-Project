import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import store from './store/store'
import { Provider } from 'react-redux'
import Tables from './pages/sidebar/Tables/Table'
import Users from './pages/sidebar/Tables/users/Users'
import Login from './pages/form/auth/Login'

function App() {

  return (
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/tables' element={<Tables/>}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
