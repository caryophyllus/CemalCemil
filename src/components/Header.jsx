import { Link } from 'react-router-dom'
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
        <Link to="/">HOME</Link>
        <Link to="/category">CATEGORY</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Header
