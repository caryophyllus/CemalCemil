import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoEsPuter = () => {
  const tokoList = [
    { name: "Es Puter Gondrong / Pak Kuat", rating: "★★★★★", address: "Jl. Purwosari Raya No.27c, Rejosari, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50125" },
    { name: "Es Puter Sari Murni Rejosari", rating: "★★★★☆", address: "Jl. Rejosari V No.33A, Rejosari, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50125" },
    { name: "Es Puter Cong Lik", rating: "★★★★☆", address: "Jl. Kh Ahmad Dahlan No.11, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136" },
    { name: "Es Puter Sultan Semarang", rating: "★★★★★", address: "Jl. Sisingamangaraja No.5, Kaliwiru, Kec. Candisari, Kota Semarang, Jawa Tengah 50252" },
    { name: "Es Puter Tempoe Doeloe", rating: "★★★★★", address: "Jl. Semarang Indah D15 No 31, Tawangmas, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/es-puter" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Es Puter</h2>

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

export default TokoEsPuter