import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoTahuGimbal = () => {
  const tokoList = [
    { name: "Tahu Gimbal Haji Edy", rating: "★★★★☆", address: "Jl. Pandanaran No.2, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249" },
    { name: "Tahu Gimbal Bang Toyib", rating: "★★★★★", address: "Jl. Suratmo, Gisikdrono, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50147" },
    { name: "Tahu Gimbal Pak Gendut", rating: "★★★★★", address: "Jl. Veteran No.34, Lempongsari, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50231" },
    { name: "Tahu Gimbal Super Setan Pak Agus", rating: "★★★★★", address: "Jl. Simongan No.195, Ngemplak Simongan, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50148" },
    { name: "Tahu Gimbal Lumayan Pak Man", rating: "★★★★☆", address: "Jl. Plampitan No.54, Bangunharjo, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Tahu Gimbal Pak Tomo", rating: "★★★★★", address: "Jl. Plampitan No.54, Bangunharjo, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/tahu-gimbal" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Tahu Gimbal</h2>

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

export default TokoTahuGimbal