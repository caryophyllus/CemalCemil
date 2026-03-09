// Footer.js (updated)
import '../index.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-column">
          <h3>Tentang</h3>
          <p>
            CemalCemil Semarang adalah platform untuk menjelajahi
            kuliner khas Semarang, dari yang legendaris hingga tersembunyi.
          </p>
        </div>

        <div className="footer-column">
          <h3>Menu</h3>
          <p>Home</p>
          <p>Category</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>

        <div className="footer-column">
          <h3>Kontak</h3>
          <p className="contact-item">📧 cemalcemil@gmail.com</p>
          <p className="contact-item">📷 @cemalcemil</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 CemalCemil_Semarang. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer