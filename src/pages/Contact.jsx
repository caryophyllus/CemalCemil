import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Pesan berhasil dikirim!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <Header />
      
      <section>
        <h2 className="section-title">CONTACT</h2>
        <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: 'auto'}}>
          <div style={{marginBottom: '16px'}}>
            <input
              type="text"
              name="name"
              placeholder="Nama"
              required
              value={formData.name}
              onChange={handleChange}
              style={{width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid #ccc'}}
            />
          </div>

          <div style={{marginBottom: '16px'}}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid #ccc'}}
            />
          </div>

          <div style={{marginBottom: '16px'}}>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid #ccc'}}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              background:'#f3c303',
              color:'#fff',
              padding:'12px 24px',
              border:'none',
              borderRadius:'8px',
              fontWeight:'600',
              cursor:'pointer'
            }}
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      <Footer />
    </>
  )
}

export default Contact