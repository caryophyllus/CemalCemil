import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import tahuImg from '../../assets/tahu_gimbal.jpeg'

const TahuGimbal = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">TAHU GIMBAL</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={tahuImg} alt="Tahu Gimbal" />
          </div>

          <div>
            <p>
              Tahu gimbal adalah kuliner khas Semarang, Jawa Tengah, berupa potongan tahu goreng, gimbal (bakwan udang), lontong, taoge, dan kol mentah yang disiram bumbu kacang petis yang kental dan gurih. Ikon kuliner ini terkenal dengan perpaduan tekstur renyah dan bumbu petis yang khas.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-tahu-gimbal" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TahuGimbal