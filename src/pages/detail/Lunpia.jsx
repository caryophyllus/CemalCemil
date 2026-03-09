import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import lunpia from '../../assets/lunpia.avif'

const Lunpia = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">LUNPIA</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={lunpia} alt="Lunpia Semarang" />
          </div>

          <div>
            <p>
              Lunpia adalah hidangan khas Semarang berisi rebung muda, telur, dan udang yang dibungkus kulit tipis kemudian digoreng ringan sehingga menghasilkan rasa gurih manis yang harum, renyah di luar, dan lembut di dalam.
            </p>
            <br />
            <p>
              Lunpia biasanya disajikan dengan saus kental khas, acar mentimun, dan daun bawang, menjadikannya salah satu ikon kuliner paling terkenal dari Kota Semarang.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-lunpia" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Lunpia