import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoWedangRonde = () => {
  const tokoList = [
    { name: "Wedang Ronde Pak Firdaus", rating: "★★★★★", address: "Jl. Anjasmoro Raya No.70, Karangayu, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50149" },
    { name: "Wedang Ronde Pak Sabar", rating: "★★★★★", address: "Jl. Pahlawan, Pleburan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50249" },
    { name: "Wedang Ronde Ny. Ong", rating: "★★★★★", address: "Jl. Pleburan Raya No.30, Pleburan, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50241" },
    { name: "Wedang Ronde Mahkota", rating: "★★★★★", address: "Jl. Ligu Tengah No.1062B, Karangkidul, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50124" },
    { name: "Ronde Pemuda", rating: "★★★★★", address: "Jl. Abdulrahman Saleh, Manyaran, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50183" },
    { name: "Wedang Ronde Arum Dalu", rating: "★★★★★", address: "Jl. Arum Sari Raya, Sambiroto, Kec. Tembalang, Kota Semarang, Jawa Tengah" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/wedang-ronde" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Wedang Ronde</h2>

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

export default TokoWedangRonde