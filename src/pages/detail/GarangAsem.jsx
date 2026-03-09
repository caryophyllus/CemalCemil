import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import garangAsem from '../../assets/garang_asem.jpg'

const GarangAsem = () => {
  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">GARANG ASEM</h2>

        <div className="hero" style={{background: 'none', padding: 0, gridTemplateColumns: '6fr 6fr'}}>
          <div>
            <img src={garangAsem} alt="Garang Asem" />
          </div>

          <div>
            <p>
              Garang asem adalah makanan tradisional khas Jawa Tengah yang dibuat dari olahan ayam yang dimasak menggunakan daun pisang dan didominasi oleh rasa asam dan pedas. Garang asem berasal dari Grobogan tetapi kini garang asem populer di Kudus, bahkan kini Garang Asem ada di beberapa kota di provinsi Jawa Tengah dan DI Yogyakarta memiliki makanan tradisional ini. Antara lain Sragen, Semarang, Magelang, Yogyakarta, Demak, Kudus, Pati, dan Pekalongan.
            </p>
            <br />
            <p>
              Garang asem biasa disajikan sebagai lauk pendamping nasi, ditambah dengan tusukan ayam asam manis, tempe goreng, dan perkedel.
            </p>
            <br />
          </div>
        </div>

        <div className="btn-group">
          <Link to="/makanan-berat" className="btn-link">← Kembali</Link>
          <Link to="/toko-garang-asem" className="btn-link">Lihat Daftar Toko</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default GarangAsem