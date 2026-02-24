import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import esmarem from '../../assets/es_marem.jpg'

const EsMarem = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">ES MAREM</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={esmarem} alt="Es Marem" />
          </div>

          <div>
            <p>
              Es Marem merupakan es tradisional dengan rasa manis segar yang dibuat dari santan dan gula.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-es-marem" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EsMarem