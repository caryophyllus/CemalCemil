import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import gandos from '../../assets/gandos.jpg'

const Gandos = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">LUNPIA</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={gandos} alt="Gandos Semarang" />
          </div>

          <div>
            <p>
              Gandos adalah makanan yang terbuat dari bahan dasar tepung beras, kelapa parut, dan garam. Adonan tersebut kemudian dituang ke dalam cetakan khusus lalu dipanggang di atas bara api. Gandos sering disebut juga sebagai kue pancong atau rangin di beberapa daerah.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-gandos" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gandos