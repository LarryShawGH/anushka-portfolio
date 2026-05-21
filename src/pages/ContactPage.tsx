import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions or interested in collaborating? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-slate-900" />
                <h3 className="font-semibold text-slate-900">Email</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Preferred way to reach me for inquiries and opportunities.
              </p>
              <a
                href="mailto:hello@anushkashahactor.com"
                className="text-slate-900 font-semibold hover:text-slate-700 smooth-transition"
              >
                hello@anushkashahactor.com
              </a>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-slate-900" />
                <h3 className="font-semibold text-slate-900">Phone</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Contact me directly by phone. Text or call.
              </p>
              <a
                href="tel:+14155551234"
                className="text-slate-900 font-semibold hover:text-slate-700 smooth-transition"
              >
                (415) 555-1234
              </a>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-slate-900" />
                <h3 className="font-semibold text-slate-900">Location</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Based between LA and Washington DC
              </p>
              <div className="text-slate-900 font-semibold">
                <p>Los Angeles, CA</p>
                <p>Washington, DC</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
              Send Me a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-slideUp">
                <p className="font-semibold">✓ Message sent successfully!</p>
                <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 smooth-transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 smooth-transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 smooth-transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 smooth-transition"
                  >
                    <option value="">Select subject...</option>
                    <option value="casting">Casting Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="representation">Representation Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 smooth-transition resize-none"
                  placeholder="Tell me more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 smooth-transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Ways to Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">General Inquiries</h3>
              <p className="text-slate-600">
                Email me for general questions, information, or casual inquiries.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Casting & Opportunities</h3>
              <p className="text-slate-600">
                For casting directors and producers, email with details and timeline.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Social Media</h3>
              <p className="text-slate-600">
                Follow for updates, behind-the-scenes content, and announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-8">Follow My Work</h3>
          <div className="flex justify-center gap-6">
            <a
              href="#instagram"
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white smooth-transition"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.303 0-9.6-4.297-9.6-9.6S6.697 2.4 12 2.4s9.6 4.297 9.6 9.6-4.297 9.6-9.6 9.6z"/>
              </svg>
            </a>
            <a
              href="#twitter"
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white smooth-transition"
              title="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-2.25 1.5-5.5 2.75-7-1z"/>
              </svg>
            </a>
            <a
              href="#linkedin"
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white smooth-transition"
              title="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
