import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import bandengPresto from '../../assets/bandeng_presto.jpeg'

const BandengPresto = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">BANDENG PRESTO</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={bandengPresto} alt="Bandeng Presto" />
          </div>

          <div>
            <p>
              Bandeng Presto adalah hidangan khas Semarang yang terbuat dari ikan bandeng yang dimasak hingga tulangnya lunak dan empuk.
            </p>
            <br />
            <p>
              Bandeng Presto biasanya disajikan dengan bumbu rempah khas Semarang yang kuat, menjadikannya salah satu hidangan ikonik dari kota ini.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-bandeng-presto" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default BandengPresto