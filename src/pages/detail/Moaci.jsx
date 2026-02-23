import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import kue_moaci from '../../assets/kue_moaci_gemini.jpg'

const Moaci = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">KUE MOACI GEMINI</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={kue_moaci} alt="Kue Moaci Gemini Semarang" />
          </div>

          <div>
            <p>
              Kue Moaci Gemini adalah kue kenyal berbalut wijen dengan isian kacang manis.
              Kue ini memiliki tekstur lembut dan rasa manis yang khas, serta aroma harum dari wijen.
            </p>
            <br />
            <p>
              Kue Moaci Gemini biasanya disajikan dengan saus kental khas,
              acar mentimun, dan daun bawang, menjadikannya salah satu
              ikon kuliner paling terkenal dari Kota Semarang.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-moaci" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Moaci