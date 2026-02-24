import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoLapisLegit = () => {
  const tokoList = [
    { name: "Lapis Legit Sdr Sugito", rating: "★★★★★", address: "Jl. Merbabu Raya Perum Banyumanik Padangsari, Semarang" },
    { name: "Lapis Legit Mbak Lien", rating: "★★★★☆", address: "Jl. Pemuda, Semarang" },
    { name: "Lapis Legit Cik Me Me", rating: "★★★★☆", address: "Jl. Gajahmada, Semarang" },
    { name: "Lapis Legit Express Semarang", rating: "★★★☆☆", address: "Jl. Pandanaran, Semarang" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/lapis-legit" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Lapis Legit</h2>

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

export default TokoLapisLegit