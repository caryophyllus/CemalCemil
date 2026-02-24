import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import lunpia from '../../assets/lunpia.avif'
import wingko from '../../assets/wingko_babat.jpg'
import moaci from '../../assets/moaci_gemini.jpg'
import gandos from '../../assets/gandos.jpg'
import lapisLegit from '../../assets/lapis_legit_waiki.jpg'
import torakur from '../../assets/torakur.jpg'

const MakananRingan = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const makananRingan = [
    {
      name: "Kue Moaci Gemini",
      desc: "Kue kenyal berbalut wijen dengan isian kacang manis.",
      image: moaci,
      link: "/moaci"
    },
    {
      name: "Wingko Babat",
      desc: "Kue kelapa panggang dengan rasa manis legit.",
      image: wingko,
      link: "/wingko"
    },
    {
      name: "Lunpia",
      desc: "Camilan ikonik Semarang dengan isian rebung.",
      image: lunpia,
      link: "/lunpia"
    },
    {
      name: "Gandos",
      desc: "Kue gurih dari adonan santan.",
      image: gandos,
      link: "/gandos"
    },
    {
      name: "Lapis Legit",
      desc: "Kue lapis manis khas Semarang.",
      image: lapisLegit,
      link: "/lapis-legit"
    },
    {
      name: "Torakur",
      desc: "Tomat rasa kurma dengan rasa unik.",
      image: torakur,
      link: "/torakur"
    }
  ]

  const filteredFoods = makananRingan.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      
        <div className="sub-category">
          <div className="menu">
            <Link to="/makanan-berat">Makanan Berat</Link>
            <Link to="/makanan-ringan" className="active">Makanan Ringan</Link>
            <Link to="/minuman">Minuman</Link>
          </div>

          <input
            type="text"
            placeholder="Cari makanan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{padding:'10px', borderRadius:'8px', border:'1px solid #ccc'}}
          />
        </div>

        <section>
          <h2 className="section-title">MAKANAN RINGAN</h2>
          <div className="grid-3">
            {filteredFoods.map((food, index) => (
              <Link key={index} to={food.link} style={{textDecoration:'none', color:'inherit'}}>
                <div className="card">
                  <img src={food.image} alt={food.name} />
                  <h3>{food.name}</h3>
                  <p>{food.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      <Footer />
    </>
  )
}

export default MakananRingan