import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

const Category = () => {
  const categories = [
    {
      title: "Makanan Berat",
      desc: "Beragam hidangan utama khas Semarang dengan cita rasa gurih, kaya rempah, dan mengenyangkan.",
      link: "/makanan-berat"
    },
    {
      title: "Makanan Ringan",
      desc: "Camilan khas Semarang yang ringan, nikmat, dan cocok dinikmati kapan saja.",
      link: "/makanan-ringan"
    },
    {
      title: "Minuman",
      desc: "Aneka minuman tradisional Semarang yang segar dan menghangatkan tubuh.",
      link: "/minuman"
    }
  ]

  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">KATEGORI MAKANAN</h2>
        <div className="grid-3">
          {categories.map((cat, index) => (
            <Link key={index} to={cat.link} style={{textDecoration:'none', color:'inherit'}}>
              <div className="card">
                <img src="https://via.placeholder.com/300" alt={cat.title} />
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
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