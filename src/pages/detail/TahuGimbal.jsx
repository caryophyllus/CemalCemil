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
              Tahu gimbal adalah hidangan khas Semarang yang terbuat dari tahu yang digoreng dan disajikan dengan udang goreng serta bumbu kacang khas Semarang.
            </p>
            <br />
            <p>
              Tahu gimbal biasanya disajikan dengan saus kental khas,
              acar mentimun, dan daun bawang, menjadikannya salah satu
              ikon kuliner paling terkenal dari Kota Semarang.
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