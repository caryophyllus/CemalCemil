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
              Wedang jahe adalah hidangan minuman sari jahe tradisional dari daerah Jawa Tengah, DI Yogyakarta dan Jawa Timur, Indonesia yang umumnya disajikan hangat atau panas. Wedang jahe juga kadang disebut sebagai teh jahe, meskipun sama sekali tidak mengandung daun teh. "Wedang" sendiri adalah istilah dalam bahasa Jawa yang berarti "Minuman Rebus".
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