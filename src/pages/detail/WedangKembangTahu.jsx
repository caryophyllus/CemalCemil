import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import wedangKembangTahu from '../../assets/wedang_kembang_tahu.jpg'

const WedangKembangTahu = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">WEDANG KEMBANG TAHU</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={wedangKembangTahu} alt="Wedang Kembang Tahu" />
          </div>

          <div>
            <p>
              Wedang Kembang Tahu merupakan minuman hangat berisi bola-bola tahu yang lembut dan manis. Minuman ini memiliki rasa lembut dan aromatik yang khas, sering disajikan saat cuaca dingin.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-wedang-kembang-tahu" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WedangKembangTahu