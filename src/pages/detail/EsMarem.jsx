import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import esmarem from '../../assets/es_marem.jpg'

const EsMarem = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">ES MAREM</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={esmarem} alt="Es Marem" />
          </div>

          <div>
            <p>
              Es Marem adalah minuman kuliner legendaris khas Semarang, Jawa Tengah, yang populer sejak tahun 1950-an. Berupa es serut dengan isian lengkap (kelapa muda, kolang-kaling, cincau, tape, kacang sangrai, roti, sirup, dan susu), minuman ini menyajikan kombinasi rasa santan gurih atau jeruk segar yang menyegarkan, terutama saat cuaca panas.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-es-marem" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EsMarem