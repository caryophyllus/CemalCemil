import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

const Gallery = () => {
  const galleryItems = [
    "Lunpia Semarang",
    "Bandeng Presto",
    "Wingko Babat",
    "Tahu Gimbal",
    "Wedang Ronde",
    "Es Puter"
  ]

  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">GALERI KULINER SEMARANG</h2>
        <div className="grid-3">
          {galleryItems.map((item, index) => (
            <div key={index} className="card">
              <img src="https://via.placeholder.com/300" alt={item} />
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gallery