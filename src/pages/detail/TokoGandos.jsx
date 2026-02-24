import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoGandos = () => {
  const tokoList = [
    { name: "Gandos Sdr Sugito", rating: "★★★★★", address: "Jl. Merbabu Raya Perum Banyumanik Padangsari, Semarang" },
    { name: "Gandos Mbak Lien", rating: "★★★★☆", address: "Jl. Pemuda, Semarang" },
    { name: "Gandos Cik Me Me", rating: "★★★★☆", address: "Jl. Gajahmada, Semarang" },
    { name: "Gandos Express Semarang", rating: "★★★☆☆", address: "Jl. Pandanaran, Semarang" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/gandos" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Gandos</h2>

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

export default TokoGandos