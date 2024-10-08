import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Display from "./components/display/Display"
import Sidebar from "./components/pages/sidebar/Sidebar"
import Navbar from "./globals/components/navbar/Navbar"

function App() {

  return (
    <>       
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
