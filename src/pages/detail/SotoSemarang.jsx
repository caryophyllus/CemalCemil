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
              Soto Semarang adalah hidangan soto ayam khas Semarang, Jawa Tengah, yang berciri khas kuah kaldu ayam bening kecokelatan, gurih, dan ringan. Disajikan dalam mangkuk porselen kecil, isiannya terdiri dari suwiran ayam kampung, tauge, bihun, daun bawang, serta bawang goreng. Sate kerang dan sate telur puyuh sering menjadi pelengkap.
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