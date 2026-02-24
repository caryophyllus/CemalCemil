import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoTorakur = () => {
  const tokoList = [
    { name: "Torakur Sdr Sugito", rating: "★★★★★", address: "Jl. Merbabu Raya Perum Banyumanik Padangsari, Semarang" },
    { name: "Torakur Mbak Lien", rating: "★★★★☆", address: "Jl. Pemuda, Semarang" },
    { name: "Torakur Cik Me Me", rating: "★★★★☆", address: "Jl. Gajahmada, Semarang" },
    { name: "Torakur Express Semarang", rating: "★★★☆☆", address: "Jl. Pandanaran, Semarang" }
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