import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import gudegImage from '../assets/gudeg.webp'

const Home = () => {
  const text = "Halo, foodies! 🍜"
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 120)

      return () => clearTimeout(timeout)
    }
  }, [index])
  
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

useEffect(() => {
  const reveals = document.querySelectorAll(".reveal")

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        } else {
          entry.target.classList.remove("active")
        }
      })
    },
    { threshold: 0.2 }
  )

  reveals.forEach(el => observer.observe(el))

  return () => observer.disconnect()
}, [])

useEffect(() => {
  const reveals = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    },
    {
      threshold: 0.15,
    }
  )

  reveals.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}, [])

useEffect(() => {
  const elements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        } else {
          entry.target.classList.remove("active")
        }
      })
    },
    {
      threshold: 0.15,
    }
  )

  elements.forEach((el) => observer.observe(el))

  return () => observer.disconnect()
}, [])


  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero reveal">
        <div className="hero-text animate-text">
          <h2 className="section-tit typing">
            {displayText}
          </h2>
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

        <div className="hero-image animate-image">
          <img src={gudegImage} alt="Gudeg" />
        </div>


      </section>

      {/* DEVELOPERS */}
      <section className="reveal">
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
      <section className="home-info reveal-left">
        <div className="info-box reveal-up delay-2">
          <h3>Tentang</h3>
          <p>
            CemalCemil Semarang adalah platform untuk menjelajahi
            kuliner khas Semarang, dari yang legendaris hingga tersembunyi.
          </p>
        </div>

        <div className="info-box reveal-up delay-2">
          <h3>Menu</h3>
          <p>Home</p>
          <p>Category</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>

        <div className="info-box reveal-up delay-2">
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
