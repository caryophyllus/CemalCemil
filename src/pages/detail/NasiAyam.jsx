import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const NasiAyam = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="section-title">NASI AYAM</h2>
        <div className="hero" style={{background: 'none', padding: 0}}>
          <div>
            <img src="https://via.placeholder.com/500" alt="Nasi Ayam" />
          </div>
          <div>
            <p>Nasi Ayam adalah nasi dengan suwiran ayam berbumbu khas yang disajikan lengkap dengan pelengkap.</p>
          </div>
        </div>
        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NasiAyam
