import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoSoto = () => {
  const tokoList = [
    { name: "Soto Semarang Khas Semarang Pak Man", rating: "★★★★☆", address: "Jl. Pamularsih Raya No.32, Salamanmloyo, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149" },
    { name: "Soto Bangkong Semarang", rating: "★★★★☆", address: "Ruko Bangkong Plaza, Jl. Majapahit No.1, Peterongan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50242" },
    { name: "Soto Ayam Semarang Pak D", rating: "★★★★★", address: "Ruko Bangkong Plaza, Jl. Majapahit No.1, Peterongan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50242" },
    { name: "Soto Seger Semarang", rating: "★★★★★", address: "Jl. Letjen Suprapto No.57, Tj. Mas, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50137" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/soto-semarang" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Soto Semarang</h2>

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

export default TokoSoto