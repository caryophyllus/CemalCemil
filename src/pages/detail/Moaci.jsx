import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import kue_moaci from '../../assets/moaci_gemini.jpg'

const Moaci = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">KUE MOACI GEMINI</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={kue_moaci} alt="Kue Moaci Gemini Semarang" />
          </div>

          <div>
            <p>
              Moaci Gemini adalah oleh-oleh legendaris khas Semarang, Jawa Tengah, yang populer sejak 1985. Berupa kue mochi kenyal berisi kacang karamel gurih dengan baluran wijen atau tepung, serta memiliki berbagai varian rasa. Kudapan ini terkenal dengan bahan alami, tanpa pengawet, dan tekstur yang lembut, menjadikannya buah tangan populer.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-moaci" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Moaci