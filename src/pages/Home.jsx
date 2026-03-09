import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import gudegImage from '../assets/gudeg.webp'
import lunpia from '../assets/lunpia.avif'
import bandeng from '../assets/bandeng_presto.jpeg'
import wingko from '../assets/wingko_babat.jpg'
import tahu from '../assets/tahu_gimbal.jpeg'
import guwe from '../assets/guwe.jpg'
import rad from '../assets/rad.jpg'
import gar from '../assets/gar.jpg'
import syad from '../assets/syad.jpg'

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
    { name: "Irsyad Abdul Jabbar Al Harits", presensi: "19", image: syad },
    { name: "Malay Imelda", presensi: "22", image: guwe },
    { name: "Radella Alicia Rianto", presensi: "27", image: rad },
    { name: "Tegar Aldiansyah", presensi: "33", image: gar },
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

  const heroImages = [gudegImage, lunpia, bandeng, wingko, tahu]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    )
  }, 4000)

  return () => clearInterval(interval)
}, [])


  return (
    <>
      <Header />

      <section className="page-transitio">
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
              <a href="/gallery" className="btn-primary">
                Jelajahi Kuliner
              </a>
              <a href="/category" className="btn-secondary">
                Rekomendasi Hari Ini
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img 
              src={heroImages[currentImage]} 
              alt="Kuliner Semarang"
              className="hero-img"
            />
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
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '250px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <img 
                    src={dev.image} 
                    alt={dev.name} 
                    style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem auto', display: 'block' }} 
                  />
                </div>
                <h3 style={{ textAlign: 'center', marginTop: '0.5rem' }}>{dev.name}</h3>
                <p style={{ textAlign: 'center' }}>({dev.presensi})</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />

      {/* MODAL */}
      {modalData && (
        <div className="dev-modal active" onClick={closeModal}>
          <div className="dev-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalData.image} 
              alt={modalData.name} 
              style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto', display: 'block' }} 
            />
            <h3 style={{ textAlign: 'center' }}>{modalData.name}</h3>
            <p style={{ textAlign: 'center' }}>Presensi: {modalData.presensi}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
