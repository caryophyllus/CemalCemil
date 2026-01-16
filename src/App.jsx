import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
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
    </Routes>
  )
}

export default App