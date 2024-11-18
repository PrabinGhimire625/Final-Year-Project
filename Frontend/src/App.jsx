import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Display from "./components/display/Display"
import Sidebar from "./components/pages/sidebar/Sidebar"
import Navbar from "./globals/components/navbar/Navbar"
import SingleAlbum from "./components/pages/singleAlbum/SingleAlbum"
import DisplaySingleAlbum from "./components/pages/singleAlbum/DisplaySingleAlbum"
import Form from "./components/pages/auth/Form"
import Login from "./components/pages/auth/login/Login"
import Register from "./components/pages/auth/signup/Register"

function App() {
  return (
    <>       
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/album/:id" element={<DisplaySingleAlbum/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
