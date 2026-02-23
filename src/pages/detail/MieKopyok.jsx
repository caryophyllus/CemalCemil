import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const MieKopyok = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="section-title">MIE KOPYOK</h2>
        <div className="hero" style={{background: 'none', padding: 0}}>
          <div>
            <img src="https://via.placeholder.com/500" alt="Mie Kopyok" />
          </div>
          <div>
            <p>Mie Kopyok adalah mie khas Semarang yang biasa disajikan dengan lontong, tauge, dan kerupuk gendar.</p>
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

export default MieKopyok
