import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Category from './pages/Category'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import MakananBerat from './pages/makanan/MakananBerat'
import MakananRingan from './pages/makanan/MakananRingan'
import Minuman from './pages/makanan/Minuman'
import Lunpia from './pages/detail/Lunpia'
import Wingko from './pages/detail/Wingko'
import TokoLunpia from './pages/detail/TokoLunpia'
import TokoWingko from './pages/detail/TokoWingko'
import TahuGimbal from './pages/detail/TahuGimbal'
import TokoTahuGimbal from './pages/detail/TokoTahuGimbal'
import SotoSemarang from './pages/detail/SotoSemarang'
import GarangAsem from './pages/detail/GarangAsem'
import MieKopyok from './pages/detail/MieKopyok'
import BandengPresto from './pages/detail/BandengPresto'
import NasiAyam from './pages/detail/NasiAyam'
import Moaci from './pages/detail/Moaci'
import TokoMoaci from './pages/detail/TokoMoaci'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/makanan-berat" element={<MakananBerat />} />
          <Route path="/makanan-ringan" element={<MakananRingan />} />
          <Route path="/minuman" element={<Minuman />} />
          <Route path="/lunpia" element={<Lunpia />} />
          <Route path="/wingko" element={<Wingko />} />
          <Route path="/toko-lunpia" element={<TokoLunpia />} />
          <Route path="/toko-wingko" element={<TokoWingko />} />
          <Route path="/tahu-gimbal" element={<TahuGimbal />} />
          <Route path="/toko-tahu-gimbal" element={<TokoTahuGimbal />} />
          <Route path="/soto-semarang" element={<SotoSemarang />} />
          <Route path="/garang-asem" element={<GarangAsem />} />
          <Route path="/mie-kopyok" element={<MieKopyok />} />
          <Route path="/bandeng-presto" element={<BandengPresto />} />
          <Route path="/nasi-ayam" element={<NasiAyam />} />
          <Route path="/moaci" element={<Moaci />} />
          <Route path="/toko-moaci" element={<TokoMoaci />} />
        </Routes>
      </main>
    </>
  )
}

export default App
