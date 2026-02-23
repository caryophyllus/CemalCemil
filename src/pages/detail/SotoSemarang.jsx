import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const SotoSemarang = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="section-title">SOTO SEMARANG</h2>
        <div className="hero" style={{background: 'none', padding: 0}}>
          <div>
            <img src="https://via.placeholder.com/500" alt="Soto Semarang" />
          </div>
          <div>
            <p>Soto Semarang adalah soto kuah bening dengan suwiran ayam, bihun, dan rempah yang khas.</p>
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

export default SotoSemarang
