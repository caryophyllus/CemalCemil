import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import torakur from '../../assets/torakur.jpg'

const Torakur = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">TORAKUR</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={torakur} alt="Torakur" />
          </div>

          <div>
            <p>
              Torakur merupakan olahan tomat yang mempunyai rasa persis rasa kurma dan sering disebut manisan kurma. Olahan tomat yang pertama kali diperkenalkan oleh Ibu Sri Ngestiwati dan menjadi oleh-oleh khas Bandungan, Kabupaten Semarang.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-torakur" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Torakur