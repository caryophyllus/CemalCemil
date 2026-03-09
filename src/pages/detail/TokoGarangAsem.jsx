import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoGarangAsem = () => {
  const tokoList = [
    { name: "Garang Asem Sari Rasa", rating: "★★★★★", address: "Jl. Ki Mangunsarkoro No.15, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50136" },
    { name: "Waroeng Garang Asem Putra Joyoboyo", rating: "★★★★★", address: "Jl. Batan Selatan, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241" },
    { name: "Umi Ayam Bakar & Garang Asem", rating: "★★★★★", address: "Jl. Simongan No.18, Ngemplak Simongan, Jawa Tengah, Kota Semarang, Jawa Tengah 50148" },
    { name: "Garang Asem & Gudeg Hj. Sarti", rating: "★★★★☆", address: "Jl. Sambiroto Raya No.70, Sambiroto, Kec. Tembalang, Kota Semarang, Jawa Tengah 50276" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/garang-asem" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Garang Asem</h2>

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

export default TokoGarangAsem