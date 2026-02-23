import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

import lunpia from '../assets/lunpia.avif'
import bandeng from '../assets/bandeng_presto.jpeg'
import wingko from '../assets/wingko_babat.jpg'
import tahu from '../assets/tahu_gimbal.jpeg'
import ronde from '../assets/wedang_ronde.jpg'
import esputer from '../assets/es_puter.jpg'

const Gallery = () => {
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
    { name: "Lunpia Semarang", image: lunpia },
    { name: "Bandeng Presto", image: bandeng },
    { name: "Wingko Babat", image: wingko },
    { name: "Tahu Gimbal", image: tahu },
    { name: "Wedang Ronde", image: ronde },
    { name: "Es Puter", image: esputer }
  ]

  return (
    <>
      <Header />

      <section>
        <h2 className="section-title typing">
          {displayText}
        </h2>

        <div className="grid-3">
          {galleryItems.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gallery
