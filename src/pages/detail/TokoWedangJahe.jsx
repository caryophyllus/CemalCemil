import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoWedangJahe = () => {
  const tokoList = [
    { name: "Warung Wedang Jahe Rempah Mbah Jo", rating: "★★★★★", address: "Jl. Menteri Supeno I Semarang No.1, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249" },
    { name: "Jahe Rempah 57", rating: "★★★★★", address: "Jl. Puspanjolo Barat Raya Barat No.57, Bojongsalaman, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50141" },
    { name: "Warung Jahe Rempah TLJ", rating: "★★★★★", address: "Jl. Tri Lomba Juang, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249" },
    { name: "Wedang Jahe Rempah 'Ben Waras'", rating: "★★★★★", address: "Jl. Sukun Raya No.18, Srondol Wetan, Kec. Banyumanik, Kota Semarang, Jawa Tengah 50263" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/wedang-jahe" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Wedang Jahe</h2>

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

export default TokoWedangJahe