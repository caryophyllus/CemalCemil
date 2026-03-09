import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoWedangKembangTahu = () => {
  const tokoList = [
    { name: "Wedang Tahu 'Tjoa'", rating: "★★★★★", address: "Jl. Wotgandul Timur, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Wedang Tahu Khas Semarang Pak Pardi", rating: "★★★★★", address: "Jl. Gajahmada No.70-C, Bangunharjo, Semarang Tengah, Semarang City, Central Java 50133" },
    { name: "Wedang Tahu Kranggan", rating: "★★★★★", address: "Jl. Gg. Warung No.26, Kauman, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Wedang Tahu Kedung Mundu", rating: "★★★★☆", address: "Jl. Kedungmundu No.22, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/wedang-kembang-tahu" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Wedang Kembang Tahu</h2>

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

export default TokoWedangKembangTahu