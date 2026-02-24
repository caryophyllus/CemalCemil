import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import garangAsem from '../../assets/garang_asem.jpg'

const GarangAsem = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">GARANG ASEM</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={garangAsem} alt="Garang Asem" />
          </div>

          <div>
            <p>
              Garang Asem adalah masakan ayam berkuah asam segar yang dimasak dalam daun pisang.
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
          <Link to="/toko-garang-asem" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default GarangAsem