import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'

import { NavMenu } from './components/NavMenu'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    <>
      <div id="App">

        <BrowserRouter>
        <NavMenu />
          <Routes>
            {/* <Home /> */}
            <Route path="/" element={<Home />} />
            {/* <NavMenu/> */}
            {/* <Route path="/" element={<NavMenu />} /> */}
            {/* <Login /> */}
            <Route path="/Login" element={<Login />} />
            {/* <Register/> */}
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
