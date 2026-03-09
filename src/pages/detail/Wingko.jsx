import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import wingko_babat from '../../assets/wingko_babat.jpg'

const Wingko = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">WINGKO</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={wingko_babat} alt="Wingko Babat" />
          </div>

          <div>
            <p>
              Wingko atau sering disebut juga Wingko babat adalah makanan tradisional khas Indonesia. Wingko adalah sejenis kue yang terbuat dari kelapa muda, tepung beras ketan dan gula. Wingko sangatterkenal di pantai utara pulau Jawa.
            </p>
            <br />
            <p>
              Wingko biasanya berbentuk bundar biasa disajikan dalam keadaan hangat dan dipotong kecil-kecil. Wingko dapat dijual dalam bentuk bundar yang besar atau juga berupa kue-kue kecil yang dibungkus kertas. Kombinasi gula dan kelapa menjadikan kue ini nikmat.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-ringan" className="btn-link">← Kembali</Link>
          <Link to="/toko-wingko" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Wingko