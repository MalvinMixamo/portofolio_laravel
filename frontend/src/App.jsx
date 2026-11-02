import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Berandacopy from './page/dashboard/Berandacopy'
import Beranda from './page/dashboard/Beranda'
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/beranda/copy" element={<Berandacopy />} />
        <Route path="/dashboard/beranda" element={<Beranda />} />
      </Routes>
    </BrowserRouter>
  )
}