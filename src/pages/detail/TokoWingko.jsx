import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoWingko = () => {
  const tokoList = [
    { name: "Wingko babat Cap Kereta Api", rating: "★★★★★", address: "Jl. Cendrawasih No 14, Purwodinatan Timur, Semarang Tengah." },
    { name: "Wingko Babat Pak Moel", rating: "★★★★☆", address: "Jl. Pakunden Tengah No.1110, Semarang" },
    { name: "Wingko Babat Chandra", rating: "★★★★☆", address: "Jl. Bakunden Tengah No. 1038, Pakunden, Semarang Tengah" },
    { name: "Wingko Babat NN Meniko", rating: "★★★☆☆", address: "Jl. Cendrawasih 08A, Purwodinatan, Semarang Tengah" },
    { name: "Wingko Babat Sdr Sugito", rating: "★★★☆☆", address: "Jl.  Merbabu Raya Perum Banyumanik Padangsari, Semarang" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/wingko" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Wingko</h2>

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

export default TokoWingko