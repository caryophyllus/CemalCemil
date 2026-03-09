import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoNasiAyam = () => {
  const tokoList = [
    { name: "Nasi Ayam Bu Darmi", rating: "★★★★★", address: "pusat kuliner batan selatan, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134" },
    { name: "Nasi Ayam Bu Pini", rating: "★★★★★", address: "Gg. Pinggir No.75, Kranggan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50139" },
    { name: "Nasi Ayam Bu Jawi", rating: "★★★★★", address: "Jl. MH Thamrin No.82B, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50134" },
    { name: "Nasi Ayam Bu Wido", rating: "★★★★★", address: "Jl. Melati Selatan, Brumbungan, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50135" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/nasi-ayam" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Nasi Ayam</h2>

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

export default TokoNasiAyam