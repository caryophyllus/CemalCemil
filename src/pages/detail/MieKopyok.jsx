import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import mieKopyok from '../../assets/mie_kopyok.jpg'

const MieKopyok = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">MIE KOPYOK</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={mieKopyok} alt="Mie Kopyok" />
          </div>

          <div>
            <p>
              Mie Kopyok adalah mie khas Semarang yang biasa disajikan dengan lontong, tauge, dan kerupuk gendar.
            </p>
            <br />
            <p>
              Masakan ini memiliki rasa asam dan pedas yang khas, serta disajikan dengan bumbu rempah khas Semarang.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-mie-kopyok" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default MieKopyok