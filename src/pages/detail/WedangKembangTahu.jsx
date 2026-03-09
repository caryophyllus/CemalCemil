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
              Wedang tahu adalah minuman yang beromakan jahe dan berisi kembang tahu yang terbuat dari sari kedelai. Minuman ini berkhasiat sebagai penghangat tubuh dan sangat cocok bila dinikmati pada musim hujan, pada pagi ataupun sore hari.
            </p>
            <br />
            <p>
              Wedang tahu terbuat dari susu kedelai yang dicampur dengan air garam, dan bubuk agar-agar yang dimasak sehingga menjadi kembang tahu atau tahu sutera, yang akan dijadikan sebagai isi dari wedang tahu tersebut.
            </p>
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