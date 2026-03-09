import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const TokoBandengPresto = () => {
  const tokoList = [
    { name: "Bandeng Juwana Elrina Pamularsih", rating: "★★★★★", address: "Jl. Pamularsih Raya No.70, Bongsari, Kec. Semarang Barat, Kota Semarang, Jawa Tengah 50148" },
    { name: "Bandeng Surya", rating: "★★★★★", address: "Jl. Mayjend Sutoyo No.85, Karangkidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241" },
    { name: "Bandeng Presto Semarang", rating: "★★★★☆", address: "Jl. Pandanaran No.67-69, Randusari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50244" },
    { name: "Bandeng Bonafide", rating: "★★★★☆", address: "Jl. Pandanaran No.53, Randusari, Kec. Semarang Sel., Kota Semarang, Jawa Tengah 50244" }
  ]

  return (
    <>
      <Header />
      
      <section>
        <Link to="/bandeng-presto" className="btn-link">← Kembali</Link>
        
        <h2 className="section-title">Daftar Toko Bandeng Presto</h2>

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

export default TokoBandengPresto