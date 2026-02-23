import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import bandeng_presto from '../../assets/bandeng_presto.jpeg'

const BandengPresto = () => {
  return (
    <>
      <Header />
      <section>
        <h2 className="section-title">BANDENG PRESTO</h2>
        <div className="hero" style={{background: 'none', padding: 0}}>
          <div>
            <img src={bandeng_presto} alt="Bandeng Presto" />
          </div>
          <div>
            <p>Bandeng Presto adalah olahan ikan bandeng yang dimasak hingga tulangnya lunak dan empuk.</p>
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

export default BandengPresto
