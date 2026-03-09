import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoTorakur = () => {
  const tokoList = [
    { name: "Pusat Oleh Oleh Khas Kab. Semarang TORAKUR", rating: "★★★★☆", address: "Jl. Pangeran Diponegoro KM 1,7 No.51, Tangaran, Kenteng, Bandungan, Kabupaten Semarang, Jawa Tengah 50614" },
    { name: "Torakur Bandungan", rating: "★★★★★", address: "Jl. Ampel Gading No.5/6, Gatun, Kenteng, Bandungan, Kabupaten Semarang, Jawa Tengah 50614" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/torakur" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Torakur</h2>

        <div className="toko-list">
          {tokoList.map((toko, index) => (
            <div key={index} className="toko-card">
              <h4>{toko.name}</h4>
              <div className="rating">{toko.rating}</div>
              <p>{toko.address}</p>
              <a href={`https://maps.google.com/?q=${toko.name}+Semarang`} target="_blank" rel="noopener noreferrer">
                Hubungi
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TokoTorakur