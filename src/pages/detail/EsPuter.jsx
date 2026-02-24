import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import esputer from '../../assets/es_puter.jpg'

const EsPuter = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">ES PUTER</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={esputer} alt="Es Puter" />
          </div>

          <div>
            <p>
              Es Puter merupakan es tradisional bertekstur lembut dengan rasa manis segar dan aneka varian.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-es-puter" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EsPuter