import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoMieKopyok = () => {
  const tokoList = [
    { name: "Mie Kopyok Pak Dhuwur", rating: "★★★★☆", address: "Jl. Tanjung No.18A, Pandansari, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132" },
    { name: "Mie Kopyok Pak Poer", rating: "★★★★★", address: "Jl. Menteri Supeno, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah" },
    { name: "Mie Kopyok Nurra", rating: "★★★★★", address: "Jl. Pusponjolo Slt No.201, Bojongsalaman, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50141" },
    { name: "Mie Kopyok Pak Ngadi", rating: "★★★★★", address: "Jl. Karang Anyar, Gabahan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50135" },
    { name: "Mie Kopyok Antok", rating: "★★★★★", address: "Jl. Pandanaran 1 No.29, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/mie-kopyok" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Mie Kopyok</h2>

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

export default TokoMieKopyok