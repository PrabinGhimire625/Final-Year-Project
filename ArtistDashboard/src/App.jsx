import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddSong from "./pages/AddForm/AddSong";
import AddAlbum from "./pages/AddForm/AddAlbum";
import ListAlbum from "./pages/Tables/ListAlbum";
import ListSong from "./pages/Tables/ListSong";
import Sidebar from "./globals/components/Sidebar";
import Navbar from "./globals/components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import {Provider} from "react-redux"
import store from "./store/store"
import EditAlbum from "./pages/EditForm/EditAlbum";

function App() {
  return (
    <Provider  store={store}>
      <BrowserRouter>
      <ToastContainer />
        <div className="flex items-start min-h-screen">
          <Sidebar/>

          <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
            <Navbar/>
            <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
              <Routes>
                <Route path="/add-song" element={<AddSong />} />
                <Route path="/add-album" element={<AddAlbum />} />
                <Route path="/list-song" element={<ListSong />} />
                <Route path="/list-album" element={<ListAlbum />} />
                <Route path="/dashboard" element={<Dashboard />} />
            
                <Route path="/editAlbum/:id" element={<EditAlbum />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
