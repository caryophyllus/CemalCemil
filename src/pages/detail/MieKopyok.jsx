import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import mieKopyok from '../../assets/mie_kopyok.jpg'

const MieKopyok = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">MIE KOPYOK</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={mieKopyok} alt="Mie Kopyok" />
          </div>

          <div>
            <p>
              Mi kopyok adalah hidangan berbahan dasar mi dari Semarang.Dengan isian mi kuning, kuah bawang, lontong, taoge, tahu, taburan seledri dan kerupuk gendar di atasnya. Mi kopyok ini merupakan salah satu makanan khas kota Semarang yang susah ditemukan di tempat lain. Mi kopyok kebanyakan dijajakan dengan gerobak keliling dari kampung ke kampung.
            </p>
            <br />
            <p>
              Mi kopyok atau mi lontong juga disebut sebagai mi teng-teng karena penjualnya suka memukul piring dan berbunyi "Teng-teng-teng" sebagai tanda untuk memasarkan dagangannya.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-mie-kopyok" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default MieKopyok