import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../index.css'
import tahuImg from '../../assets/tahu_gimbal.jpeg'
import sotoImg from '../../assets/soto_semarang.jpg'
import garangImg from '../../assets/garang_asem.jpg'
import mieKopyokImg from '../../assets/mie_kopyok.jpg'
import bandengImg from '../../assets/bandeng_presto.jpeg'
import nasiAyamImg from '../../assets/nasi_ayam.jpeg'

const MakananBerat = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const makananBerat = [
    {
      name: "Tahu Gimbal",
      desc: "Hidangan khas Semarang berisi tahu goreng, lontong, kol, dan udang goreng dengan bumbu kacang gurih manis.",
      image: tahuImg,
      link: "/tahu-gimbal"
    },
    {
      name: "Soto Semarang",
      desc: "Soto berkuah bening dengan suwiran ayam dan bihun, rasanya ringan namun tetap kaya rempah.",
      image: sotoImg,
      link: "/soto-semarang"
    },
    {
      name: "Garang Asem",
      desc: "Olahan ayam berkuah segar dengan perpaduan rasa asam, pedas, dan gurih, dimasak dalam daun pisang.",
      image: garangImg,
      link: "/garang-asem"
    },
    {
      name: "Mie Kopyok",
      desc: "Mie dengan kuah ringan berisi lontong, tauge, dan kerupuk gendar khas Semarang.",
      image: mieKopyokImg,
      link: "/mie-kopyok"
    },
    {
      name: "Bandeng Presto",
      desc: "Ikan bandeng empuk bertulang lunak dengan bumbu rempah kuat khas Semarang.",
      image: bandengImg,
      link: "/bandeng-presto"
    },
    {
      name: "Nasi Ayam",
      desc: "Nasi dengan suwiran ayam berbumbu gurih manis, disajikan dengan kuah dan pelengkap khas.",
      image: nasiAyamImg,
      link: "/nasi-ayam"
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
            <Link key={index} to={food.link} style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default MakananBerat