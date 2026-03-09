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
              Wedang ronde adalah salah satu minuman khas Jawa Tengah. Minuman ini mengandung ramuan agak pedas (seperti jahe) dengan penganan bulat-bulat kecil di dalamnya.
            </p>
            <br />
            <p>
              Pembuatan wedang ronde terdiri dari kuah jahe yang berisi ronde yang berbentuk bulat-bulat. Wedang jahe merupakan hasil akulturasi dengan Festival Dongzhi di Kota Tangerang yang menyajikan ronde. Penyajian wedang jahe dalam keadaan hangat atau panas pada cuaca dingin atau malam hari. Di Indonesia, selain di Kota Tangerang, ronde juga disajikan di Kota Salatiga dan Kota Yogyakarta. Wedang ronde memberikan rasa hangat dan menyegarkan serta dapat menyehatkan tubuh.
            </p>
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