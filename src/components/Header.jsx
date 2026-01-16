import { Link } from 'react-router-dom'
import '../index.css'

const Header = () => {
  return (
    <header>
      <h1>CEMALCEMIL_SEMARANG</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/category">CATEGORY</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header