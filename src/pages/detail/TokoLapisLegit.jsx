import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoLapisLegit = () => {
  const tokoList = [
    { name: "Waiki Lapis Legit", rating: "★★★★★", address: "Jl. Senjoyo 2 No.2A, Bugangan, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50126" },
    { name: "Lapis Legit Niki Sae", rating: "★★★★★", address: "Jl. Senjoyo 2 No.7 A, Bugangan, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50126" },
    { name: "Levina Cake", rating: "★★★★★", address: "Jl. Puri Anjasmoro Blok i 2 no. 18, Tawangsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50144" },
    { name: "Kue Lapis Legit Anggrek", rating: "★★★★☆", address: "Jl. Majapahit No.150, RW.7, Gayamsari, Kec. Gayamsari, Kota Semarang, Jawa Tengah 50248" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/lapis-legit" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Lapis Legit</h2>

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

export default TokoLapisLegit