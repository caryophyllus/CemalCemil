import { useEffect, useState } from 'react'
import { createPortal } from "react-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom"
import '../index.css'

import lunpia from '../assets/lunpia.avif'
import bandeng from '../assets/bandeng_presto.jpeg'
import wingko from '../assets/wingko_babat.jpg'
import tahu from '../assets/tahu_gimbal.jpeg'
import ronde from '../assets/wedang_ronde.jpg'
import esputer from '../assets/es_puter.jpg'
import esmarem from '../assets/es_marem.jpg'
import kolak from '../assets/kolak.jpg'
import wedangJahe from '../assets/wedang_jahe.jpg'
import wedangKembangTahu from '../assets/wedang_kembang_tahu.jpg'
import moaci from '../assets/moaci_gemini.jpg'
import mieKopyok from '../assets/mie_kopyok.jpg'
import garangAsem from '../assets/garang_asem.jpg'
import sotoSemarang from '../assets/soto.jpg'
import nasiAyam from '../assets/nasi_ayam.jpg'

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
  if (selectedImage) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [selectedImage])

useEffect(() => {
  setTimeout(() => {
    setIsVisible(true)
  }, 50)
}, [])

  const text = "GALERI KULINER SEMARANG"
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

  const galleryItems = [
    { name: "Tahu Gimbal", image: tahu },
    { name: "Bandeng Presto", image: bandeng },
    { name: "Mie Kopyok", image: mieKopyok },
    { name: "Nasi Ayam", image: nasiAyam },
    { name: "Soto Semarang", image: sotoSemarang },
    { name: "Garang Asem", image: garangAsem },
    { name: "Wingko Babat", image: wingko },
    { name: "Lunpia Semarang", image: lunpia },
    { name: "Moaci", image: moaci },
    { name: "Wedang Ronde", image: ronde },
    { name: "Es Puter", image: esputer },
    { name: "Es Marem", image: esmarem },
    { name: "Kolak Pisang", image: kolak },
    { name: "Wedang Jahe", image: wedangJahe },
    { name: "Wedang Kembang Tahu", image: wedangKembangTahu },
  ]

  return (
    <>
      <Header />

      <section className={`page-transition ${isVisible ? "show" : ""}`}>
        <h2 className="section-title typing">
          {displayText}
        </h2>

        <div className="grid-3">
          {galleryItems.map((item, index) => (
            <div key={index} className="card">
              <img
                src={item.image}
                alt={item.name}
                onClick={() => setSelectedImage(item.image)}
                style={{ cursor: "pointer" }}
              />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
        {selectedImage &&
          createPortal(
            <div className="lightbox" onClick={() => setSelectedImage(null)}>
              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt="preview" />
              </div>
            </div>,
            document.body
          )
        }
      </section>

      <Footer />
    </>
  )
}

export default Gallery
