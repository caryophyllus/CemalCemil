import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoKolak = () => {
  const tokoList = [
    { name: "Warung Rujak dan Kolak Setup Bu Oni", rating: "★★★★★", address: "Jl. Puspowarno Selatan III, RT.1/RW.5, Salamanmloyo, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149" },
    { name: "Aneka Bubur dan Kolak pak Roso", rating: "★★★★★", address: "Jl. Singosari Raya, Wonodri, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50241" },
    { name: "Aneka Bubur dan Kolak", rating: "★★★★☆", address: "Jl. Tm.Lebdosari No.41, Kalibanteng Kulon, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50145" },
    { name: "Warung Es Kelapa Muda & Es Kolak Pisang Bu Marni", rating: "★★★★★", address: "Tlogosari Kulon, Pedurungan, Semarang City, Central Java 50196" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/kolak" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Kolak</h2>

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

export default TokoKolak