import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import wedangjahe from '../../assets/wedang_jahe.jpg'

const WedangJahe = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">WEDANG JAHE</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={wedangjahe} alt="Wedang Jahe" />
          </div>

          <div>
            <p>
              Wedang Jahe merupakan minuman hangat beraroma tajam dengan rasa pedas lembut yang menghangatkan tubuh. Minuman ini memiliki rasa manis dan aromatik yang khas, sering disajikan saat cuaca dingin.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-wedang-jahe" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WedangJahe