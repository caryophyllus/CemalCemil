import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'
import lunpia from '../assets/lunpia.avif'
import wedang_ronde from '../assets/wedang_ronde.jpg'
import bandeng_presto from '../assets/bandeng_presto.jpeg'
import tahu_gimbal from '../assets/tahu_gimbal.jpeg'
import wingko_babat from '../assets/wingko_babat.jpg'
import es_puter from '../assets/es_puter.jpg'
import kue_moaci from '../assets/moaci_gemini.jpg'

const Category = () => {
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
    }
  ]
  
  return (
    <>
      <Header />
      
      {/* Simple Category Buttons */}
      <div style={{
        padding: '1.5rem',
        background: 'white',
        borderBottom: '1px solid #eee'
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
      </div>

      {/* Food Grid */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <h2 className="section-title">REKOMENDASI MAKANAN</h2>
        
        <div className="grid-3">
          {foods.map((food, index) => (
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