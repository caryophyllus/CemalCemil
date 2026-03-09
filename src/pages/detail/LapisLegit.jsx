import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import lapisLegit from '../../assets/lapis_legit_waiki.jpg'

const LapisLegit = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">LAPIS LEGIT</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={lapisLegit} alt="Lapis Legit Semarang" />
          </div>

          <div>
            <p>
              Lapis Legit adalah kue khas Semarang yang terbuat dari lapisan-lapisan adonan berwarna-warni yang disusun dan dipanggang. Kue ini memiliki tekstur lembut dan rasa manis yang khas, sering kali disajikan sebagai camilan atau makanan penutup.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-lapis-legit" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default LapisLegit