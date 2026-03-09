import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import kolak from '../../assets/kolak.jpg'

const Kolak = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">KOLAK</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={kolak} alt="Kolak" />
          </div>

          <div>
            <p>
              Kolak adalah makanan penutup khas Indonesia yang berbahan dasar gula aren atau gula kelapa, santan, dan daun pandan. Kolak memiliki rasa yang gurih, manis, dan tekstur yang lembut. Kolak biasanya disajikan hangat, tetapi bisa juga disajikan dingin dengan ditambah es batu sehingga menjadi es kolak. Meski saat ini sudah dapat ditemui di mana saja, tetapi kolak sejatinya berasal dari Jawa.
            </p>
            <br />
            <p>
              Di Indonesia, kolak merupakan hidangan yang disukai masyarakat sebagai salah satu menu berbuka puasa di bulan Ramadhan. Pada bulan tersebut, penjual makanan musiman yang menjual kolak dapat dengan mudah ditemukan di pinggir jalan raya perkotaan. Selain buah pisang, kolak biji salak juga kerap ditemui saat bulan Ramadhan. Kolak biji salak terbuat dari ubi jalar yang dibentuk bulat, lalu dicampur dengan tepung tapioka.
            </p>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/minuman" className="btn-link">← Kembali</Link>
          <Link to="/toko-kolak" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Kolak