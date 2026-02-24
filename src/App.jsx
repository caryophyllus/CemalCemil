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
import Torakur from './pages/detail/Torakur'
import WedangRonde from './pages/detail/WedangRonde'
import LapisLegit from './pages/detail/LapisLegit'
import Gandos from './pages/detail/Gandos'
import WedangKembangTahu from './pages/detail/WedangKembangTahu'
import Kolak from './pages/detail/Kolak'
import WedangJahe from './pages/detail/WedangJahe'
import EsPuter from './pages/detail/EsPuter'
import EsMarem from './pages/detail/EsMarem'
import TokoBandengPresto from './pages/detail/TokoBandengPresto'
import TokoSoto from './pages/detail/TokoSoto'
import TokoEsMarem from './pages/detail/TokoEsMarem'
import TokoEsPuter from './pages/detail/TokoEsPuter'
import TokoGandos from './pages/detail/TokoGandos'
import TokoGarangAsem from './pages/detail/TokoGarangAsem'
import TokoMieKopyok from './pages/detail/TokoMieKopyok'
import TokoNasiAyam from './pages/detail/TokoNasiAyam'
import TokoLapisLegit from './pages/detail/TokoLapisLegit'
import TokoTorakur from './pages/detail/TokoTorakur'
import TokoWedangRonde from './pages/detail/TokoWedangRonde'
import TokoWedangKembangTahu from './pages/detail/TokoWedangKembangTahu'
import TokoKolak from './pages/detail/TokoKolak'
import TokoWedangJahe from './pages/detail/TokoWedangJahe'

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
          <Route path="/torakur" element={<Torakur />} />
          <Route path="/wedang-ronde" element={<WedangRonde />} />
          <Route path="/lapis-legit" element={<LapisLegit />} />
          <Route path="/gandos" element={<Gandos />} />
          <Route path="/wedang-kembang-tahu" element={<WedangKembangTahu />} />
          <Route path="/kolak" element={<Kolak />} />
          <Route path="/wedang-jahe" element={<WedangJahe />} />
          <Route path="/es-puter" element={<EsPuter />} />
          <Route path="/es-marem" element={<EsMarem />} />
          <Route path="/toko-bandeng-presto" element={<TokoBandengPresto />} />
          <Route path="/toko-soto" element={<TokoSoto />} />
          <Route path="/toko-es-marem" element={<TokoEsMarem />} />
          <Route path="/toko-es-puter" element={<TokoEsPuter />} />
          <Route path="/toko-gandos" element={<TokoGandos />} />
          <Route path="/toko-garang-asem" element={<TokoGarangAsem />} />
          <Route path="/toko-mie-kopyok" element={<TokoMieKopyok />} />
          <Route path="/toko-nasi-ayam" element={<TokoNasiAyam />} />
          <Route path="/toko-lapis-legit" element={<TokoLapisLegit />} />
          <Route path="/toko-torakur" element={<TokoTorakur />} />
          <Route path="/toko-wedang-ronde" element={<TokoWedangRonde />} />
          <Route path="/toko-wedang-kembang-tahu" element={<TokoWedangKembangTahu />} />
          <Route path="/toko-kolak" element={<TokoKolak />} />
          <Route path="/toko-wedang-jahe" element={<TokoWedangJahe />} />
        </Routes>
      </main>
    </>
  )
}

export default App
