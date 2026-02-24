import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import sotoSemarang from '../../assets/soto.jpg'

const SotoSemarang = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">SOTO SEMARANG</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={sotoSemarang} alt="Soto Semarang" />
          </div>

          <div>
            <p>
              Soto Semarang adalah hidangan khas Semarang yang terbuat dari sup daging sapi atau ayam dengan kuah yang kental dan bumbu rempah khas Semarang.
            </p>
            <br />
            <p>
              Soto Semarang biasanya disajikan dengan bumbu rempah khas Semarang yang kuat, menjadikannya salah satu hidangan ikonik dari kota ini.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-soto" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default SotoSemarang