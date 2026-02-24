import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import nasiAyam from '../../assets/nasi_ayam.jpg'

const NasiAyam = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">NASI AYAM</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={nasiAyam} alt="Nasi Ayam" />
          </div>

          <div>
            <p>
              Nasi Ayam adalah nasi dengan suwiran ayam berbumbu khas yang disajikan lengkap dengan pelengkap.
            </p>
            <br />
            <p>
              Masakan ini memiliki rasa gurih dan lezat, serta disajikan dengan bumbu rempah khas Semarang.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-nasi-ayam" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default NasiAyam