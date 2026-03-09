import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import wedangronde from '../../assets/wedang_ronde.jpg'
import esputer from '../../assets/es_puter.jpg'
import esmarem from '../../assets/es_marem.jpg'
import kolakPisang from '../../assets/kolak.jpg'
import wedangJahe from '../../assets/wedang_jahe.jpg'
import wedangKembangTahu from '../../assets/wedang_kembang_tahu.jpg'

const Minuman = () => {
  const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setIsVisible(true)
  }, 50)
}, [])

  const text = "MINUMAN"
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

  const [searchTerm, setSearchTerm] = useState('')

  const minuman = [
    {
      name: "Wedang Ronde",
      desc: "Minuman jahe hangat berisi bola-bola ketan manis yang menghangatkan tubuh.",
      image: wedangronde,
      link: "/wedang-ronde"
    },
    {
      name: "Wedang Kembang Tahu",
      desc: "Minuman hangat lembut berisi pudding kedelai dengan kuah jahe manis yang menenangkan.",
      image: wedangKembangTahu,
      link: "/wedang-kembang-tahu"
    },
    {
      name: "Kolak",
      desc: "Hidangan manis berkuah dengan pisang yang menawarkan rasa lembut, legit, dan hangat.",
      image: kolakPisang,
      link: "/kolak"
    },
    {
      name: "Wedang Jahe",
      desc: "Minuman hangat beraroma tajam dengan rasa pedas lembut yang menghangatkan tubuh.",
      image: wedangJahe,
      link: "/wedang-jahe"
    },
    {
      name: "Es Puter",
      desc: "Es tradisional bertekstur lembut dengan rasa manis segar dan aneka varian.",
      image: esputer,
      link: "/es-puter"
    },
    {
      name: "Es Marem",
      desc: "Es tradisional dengan rasa manis segar yang dibuat dari santan dan gula.",
      image: esmarem,
      link: "/es-marem"
    }
  ]

  const filteredDrinks = minuman.filter(drink =>
    drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drink.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      
      <div className="sub-category">
        <div className="menu">
          <Link to="/makanan-berat">Makanan Berat</Link>
          <Link to="/makanan-ringan">Makanan Ringan</Link>
          <Link to="/minuman" className="active">Minuman</Link>
        </div>

        <input
          type="text"
          placeholder="Cari makanan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{padding:'10px', borderRadius:'8px', border:'1px solid #ccc'}}
        />
      </div>

      <section className={`page-transition ${isVisible ? "show" : ""}`}>
        <h2 className="section-ti typing">
          {displayText}
        </h2>
        <div className="grid-3">
          {filteredDrinks.map((drink, index) => (
            <Link key={index} to={drink.link} style={{textDecoration:'none', color:'inherit'}}>
              <div className="card">
                <img src={drink.image} alt={drink.name} />
                <h3>{drink.name}</h3>
                <p>{drink.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Minuman