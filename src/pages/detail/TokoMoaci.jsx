import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoMoaci = () => {
  const tokoList = [
    { name: "Moaci Gemini", rating: "★★★★★", address: "Jl. RA. Kartini No.19, Karangturi, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50124" },
    { name: "Moaci Gemini Kentangan", rating: "★★★★★", address: "JJl. Kentangan Bar. No.101, Sawunggaling, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136" },
    { name: "Moaci Gemini Istana Buah", rating: "★★★★☆", address: "Jl. Pandanaran No.100, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50243" },
    { name: "Moaci Gemini Cabang Madukoro", rating: "★★★★★", address: "Ruko Bizpark, Jl. Madukoro Raya Blok A5, Tawangmas, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/moaci" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Kue Moaci Gemini</h2>

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

export default TokoMoaci