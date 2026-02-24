import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import wedangronde from '../../assets/wedang_ronde.jpg'

const WedangRonde = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">WEDANG RONDE</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={wedangronde} alt="Wedang Ronde" />
          </div>

          <div>
            <p>
              Wedang Ronde merupakan minuman hangat berisi bola-bola ketan manis yang menghangatkan tubuh. Minuman ini memiliki rasa manis dan aromatik yang khas, sering disajikan saat cuaca dingin.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-wedang-ronde" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default WedangRonde