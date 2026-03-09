import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../index.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup (best practice React)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
      <h1>CEMALCEMIL_SEMARANG</h1>
      <nav>
        <NavLink to="/" end className="nav-link">HOME</NavLink>
        <div className="nav-dropdown">
          <NavLink 
            to="/category"
            className={({ isActive }) =>
              `nav-link ${
                isActive ||
                window.location.pathname.startsWith("/makanan") ||
                window.location.pathname.startsWith("/minuman")
                  ? "active"
                  : ""
              }`
            }
          >
            CATEGORY
          </NavLink>

          <div className="dropdown-menu">
            <NavLink to="/makanan-berat">Makanan Berat</NavLink>
            <NavLink to="/makanan-ringan">Makanan Ringan</NavLink>
            <NavLink to="/minuman">Minuman</NavLink>
          </div>
        </div>
        <NavLink to="/gallery" className="nav-link">GALLERY</NavLink>
        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
      </nav>
    </header>
  )
}

export default Header
