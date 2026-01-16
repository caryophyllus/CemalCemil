import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const Minuman = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const minuman = [
    {
      name: "Wedang Ronde",
      desc: "Minuman jahe hangat berisi bola-bola ketan manis yang menghangatkan tubuh.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Wedang Kembang Tahu",
      desc: "Minuman hangat lembut berisi pudding kedelai dengan kuah jahe manis yang menenangkan.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Kolak",
      desc: "Hidangan manis berkuah dengan pisang yang menawarkan rasa lembut, legit, dan hangat.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Minuman Jahe",
      desc: "Minuman hangat beraroma tajam dengan rasa pedas lembut yang menghangatkan tubuh.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Es Puter",
      desc: "Es tradisional bertekstur lembut dengan rasa manis segar dan aneka varian.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Es Marem",
      desc: "Es tradisional dengan rasa manis segar yang dibuat dari santan dan gula.",
      image: "https://via.placeholder.com/300"
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

      <section>
        <h2 className="section-title">MINUMAN</h2>
        <div className="grid-3">
          {filteredDrinks.map((drink, index) => (
            <div key={index} className="card">
              <img src={drink.image} alt={drink.name} />
              <h3>{drink.name}</h3>
              <p>{drink.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Minuman