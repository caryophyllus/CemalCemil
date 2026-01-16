import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'

const MakananBerat = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const makananBerat = [
    {
      name: "Tahu Gimbal",
      desc: "Hidangan khas Semarang berisi tahu goreng, lontong, kol, dan udang goreng dengan bumbu kacang gurih manis.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Soto Semarang",
      desc: "Soto berkuah bening dengan suwiran ayam dan bihun, rasanya ringan namun tetap kaya rempah.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Garang Asem",
      desc: "Olahan ayam berkuah segar dengan perpaduan rasa asam, pedas, dan gurih, dimasak dalam daun pisang.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Mie Kopyok",
      desc: "Mie dengan kuah ringan berisi lontong, tauge, dan kerupuk gendar khas Semarang.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Bandeng Presto",
      desc: "Ikan bandeng empuk bertulang lunak dengan bumbu rempah kuat khas Semarang.",
      image: "https://via.placeholder.com/300"
    },
    {
      name: "Nasi Ayam",
      desc: "Nasi dengan suwiran ayam berbumbu gurih manis, disajikan dengan kuah dan pelengkap khas.",
      image: "https://via.placeholder.com/300"
    }
  ]

  const filteredFoods = makananBerat.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.desc.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      
      <div className="sub-category">
        <div className="menu">
          <Link to="/makanan-berat" className="active">Makanan Berat</Link>
          <Link to="/makanan-ringan">Makanan Ringan</Link>
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
        <h2 className="section-title">MAKANAN BERAT</h2>
        <div className="grid-3">
          {filteredFoods.map((food, index) => (
            <div key={index} className="card">
              <img src={food.image} alt={food.name} />
              <h3>{food.name}</h3>
              <p>{food.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default MakananBerat