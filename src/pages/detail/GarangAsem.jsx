import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const GarangAsem = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="section-title">GARANG ASEM</h2>
        <div className="hero" style={{background: 'none', padding: 0}}>
          <div>
            <img src="https://via.placeholder.com/500" alt="Garang Asem" />
          </div>
          <div>
            <p>Garang Asem adalah masakan ayam berkuah asam segar yang dimasak dalam daun pisang.</p>
          </div>
        </div>
        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default GarangAsem
