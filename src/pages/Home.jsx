import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

const Home = () => {
  const [modalData, setModalData] = useState(null)

  const developers = [
    { name: "Irsyad Abdul Jabbar Al Harits", age: "19" },
    { name: "Malay Imelda", age: "22" },
    { name: "Radella Alicia Rianto", age: "27" },
    { name: "Tegar Aldiansyah", age: "33" },
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
      
      <section className="hero">
        <div>
          <h2>Halo, foodies!</h2>
          <p>
            Siap menjelajahi kelezatan Semarang? Dari lumpia legendaris
            sampai wedang tahu yang hangat di hati — semua ada di sini.
            Yuk, kulineran bareng dan rasakan kenikmatannya!
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/400" alt="Kuliner Semarang" />
        </div>
      </section>

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
              <p>({dev.age})</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {modalData && (
        <div className="dev-modal active" onClick={closeModal}>
          <div className="dev-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src="https://via.placeholder.com/150" 
              alt={modalData.name} 
              id="modalImg"
            />
            <h3 id="modalName">{modalData.name}</h3>
            <p>Age: {modalData.age}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Home