import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import gudegImage from '../assets/gudeg.webp'

const Home = () => {
  const [modalData, setModalData] = useState(null)

  const developers = [
    { name: "Irsyad Abdul Jabbar Al Harits", presensi: "19" },
    { name: "Malay Imelda", presensi: "22" },
    { name: "Radella Alicia Rianto", presensi: "27" },
    { name: "Tegar Aldiansyah", presensi: "33" },
  ]

  const openDevModal = (dev) => {
    setModalData(dev)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalData(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h2>Halo, foodies! 🍜</h2>
          <p>
            Siap menjelajahi kelezatan Semarang? Dari lumpia legendaris
            sampai wedang tahu yang hangat di hati — semua ada di sini.
            Yuk, kulineran bareng dan rasakan kenikmatannya!
          </p>

          {/* Tombol baru */}
          <div className="hero-buttons">
            <a href="/category" className="btn-primary">
              Jelajahi Kuliner
            </a>
            <a href="/category" className="btn-secondary">
              Rekomendasi Hari Ini
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={gudegImage} alt="Kuliner Semarang" />
        </div>
      </section>

      {/* DEVELOPERS */}
      <section>
        <h2 className="section-title">OUR DEVELOPERS</h2>
        <div className="grid-4">
          {developers.map((dev, index) => (
            <div 
              key={index} 
              className="card dev-card" 
              onClick={() => openDevModal(dev)}
            >
              <img src="https://via.placeholder.com/150" alt={dev.name} />
              <h3>{dev.name}</h3>
              <p>({dev.presensi})</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFO KOLOM PUTIH */}
      <section className="home-info">
        <div>
          <h3>Tentang</h3>
          <p>
            CemalCemil Semarang adalah platform untuk menjelajahi
            kuliner khas Semarang, dari yang legendaris hingga tersembunyi.
          </p>
        </div>

        <div>
          <h3>Menu</h3>
          <p>Home</p>
          <p>Category</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Kontak</h3>
          <p className="contact-item">📧 cemalcemil@gmail.com</p>
          <p className="contact-item">📷 @cemalcemil</p>
          <p className="contact-item">📞 08xx-xxxx-xxxx</p>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {modalData && (
        <div className="dev-modal active" onClick={closeModal}>
          <div className="dev-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="https://via.placeholder.com/150" alt={modalData.name} />
            <h3>{modalData.name}</h3>
            <p>Presensi: {modalData.presensi}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
