import { useState } from 'react'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <p className='contact__subtitle'>
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <form className='contact__form' onSubmit={handleSubmit} noValidate>
        <div className='contact__row'>
          <div className='contact__field'>
            <label className='contact__label' htmlFor='name'>
              Name
              <input
                id='name'
                name='name'
                type='text'
                placeholder='John Doe'
                className='contact__input'
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='contact__field'>
            <label className='contact__label' htmlFor='email'>
              Email
              <input
                id='email'
                name='email'
                type='email'
                placeholder='john@example.com'
                className='contact__input'
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </div>

        <div className='contact__field'>
          <label className='contact__label' htmlFor='message'>
            Message
            <textarea
              id='message'
              name='message'
              placeholder='Your message...'
              rows={6}
              className='contact__input contact__textarea'
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type='submit' className='btn btn--outline contact__btn'>
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact
