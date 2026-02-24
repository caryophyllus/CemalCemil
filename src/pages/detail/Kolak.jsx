import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import kolak from '../../assets/kolak.jpg'

const Kolak = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">KOLAK</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={kolak} alt="Kolak" />
          </div>

          <div>
            <p>
              Kolak merupakan hidangan manis berkuah dengan pisang yang menawarkan rasa lembut, legit, dan hangat.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-kolak" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Kolak