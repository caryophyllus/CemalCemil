import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoEsMarem = () => {
  const tokoList = [
    { name: "Es Marem Pak Zaenal", rating: "★★★★★", address: "Jl. K.H. Wahid Hasyim, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Es Marem Puri Anjasmoro", rating: "★★★★★", address: "Jl. K.H. Wahid Hasyim, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Es Marem Semarang Indah", rating: "★★★★★", address: "Jl. Semarang Indah, Tawangmas, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144" },
    { name: "Es Marem Ibu Kuslin / Doni", rating: "★★★★★", address: "Jl. MT. Haryono No.341b, Jagalan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136" },
    { name: "Es Marem Bu Nur", rating: "★★★★☆", address: "Jl. Mayjend Sutoyo, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136" },
    { name: "Es Marem Arie Kampung Kali", rating: "★★★★☆", address: "Jl. Mayjend Sutoyo, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/es-marem" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Es Marem</h2>

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

export default TokoEsMarem