import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import lunpia from '../assets/lunpia.avif'
import wedang_ronde from '../assets/wedang_ronde.jpg'
import bandeng_presto from '../assets/bandeng_presto.jpeg'
import tahu_gimbal from '../assets/tahu_gimbal.jpeg'
import wingko_babat from '../assets/wingko_babat.jpg'
import es_puter from '../assets/es_puter.jpg'
import nasiAyam from '../assets/nasi_ayam.jpg'
import mieKopyok from '../assets/mie_kopyok.jpg'
import garangAsem from '../assets/garang_asem.jpg'
import kueMoaci from '../assets/moaci_gemini.jpg'
import lapisLegit from '../assets/lapis_legit_waiki.jpg'
import kolak from '../assets/kolak.jpg'

const Category = () => {
  const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setIsVisible(true)
  }, 50)
}, [])

  const text = "REKOMENDASI KULINER"
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 120)

      return () => clearTimeout(timeout)
    }
  }, [index])
  
  const foods = [
    {
      name: 'Lunpia Semarang',
      desc: 'Camilan ikonik Semarang dengan isian rebung lembut dan rasa gurih yang bikin ketagihan.',
      image: lunpia,
      link: "/lunpia"
    },
    {
      name: 'Wedang Ronde',
      desc: 'Minuman jahe hangat berisi bola-bola ketan manis yang menghangatkan tubuh.',
      image: wedang_ronde,
      link: "/wedang-ronde"
    },
    {
      name: 'Bandeng Presto',
      desc: 'Ikan empuk bertulang lunak dengan bumbu rempah kuat khas Semarang.',
      image: bandeng_presto,
      link: "/bandeng-presto"
    },
    {
      name: 'Tahu Gimbal',
      desc: 'Tahu goreng dengan udang goreng dan bumbu kacang khas Semarang.',
      image: tahu_gimbal,
      link: "/tahu-gimbal"
    },
    {
      name: 'Wingko Babat',
      desc: 'Kue kelapa panggang dengan rasa manis legit khas Semarang.',
      image: wingko_babat,
      link: "/wingko"
    },
    {
      name: 'Es Puter',
      desc: 'Es tradisional bertekstur lembut dengan rasa manis segar.',
      image: es_puter,
      link: "/es-puter"
    },
    {
      name: 'Nasi Ayam Semarang',
      desc: 'Nasi dengan ayam suwir berbumbu khas Semarang yang gurih dan lezat.',
      image: nasiAyam,
      link: "/nasi-ayam"
    },
    {
      name: 'Mie Kopyok',
      desc: 'Mie dengan kuah ringan berisi lontong, tauge, dan kerupuk gendar khas Semarang.',
      image: mieKopyok,
      link: "/mie-kopyok"
    },
    {
      name: 'Garang Asem',
      desc: 'Olahan ayam berkuah segar dengan perpaduan rasa asam, pedas, dan gurih, dimasak dalam daun pisang.',
      image: garangAsem,
      link: "/garang-asem"
    },
    {
      name: 'Kue Moaci',
      desc: 'Kue tradisional khas Semarang dengan tekstur lembut dan rasa manis.',
      image: kueMoaci,
      link: "/kue-moaci"
    },
    {
      name: 'Lapis Legit Waiki',
      desc: 'Kue lapis legit dengan cita rasa rempah yang kaya dan tekstur lembut.',
      image: lapisLegit,
      link: "/lapis-legit"
    },
    {
      name: 'Kolak',
      desc: 'Hidangan manis berisi pisang, ubi, dan kolang-kaling dalam kuah santan gula merah.',
      image: kolak,
      link: "/kolak"
    }
  ]
  
  // Filter foods by search term
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />

      {/* Category Buttons + Search */}
      <div style={{
        padding: '1.5rem',
        background: 'white',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/makanan-berat"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#f3c303',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              fontSize: '0.95rem',
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            Makanan Berat
          </Link>
          <Link 
            to="/makanan-ringan"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#f3c303',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              fontSize: '0.95rem',
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            Makanan Ringan
          </Link>
          <Link 
            to="/minuman"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#f3c303',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '8px',
              fontSize: '0.95rem',
              minWidth: '160px',
              textAlign: 'center'
            }}
          >
            Minuman
          </Link>
        </div>
        <input
          type="text"
          placeholder="Cari makanan..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            minWidth: '220px',
            fontSize: '1rem',
            marginLeft: 'auto'
          }}
        />
      </div>

      {/* Food Grid */}
      <section className={`page-transition ${isVisible ? "show" : ""}`} style={{ padding: '3rem 1.5rem' }}>
        <h2 className="section-ti typing">
          {displayText}
        </h2>
        <div className="grid-3">
          {filteredFoods.map((food, index) => (
            <Link to={food.link} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ cursor: 'pointer' }}>
                <img 
                  src={food.image} 
                  alt={food.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: '#333'
                }}>
                  {food.name}
                </h3>
                <p style={{ 
                  fontSize: '0.95rem', 
                  color: '#666',
                  lineHeight: 1.6
                }}>
                  {food.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Category