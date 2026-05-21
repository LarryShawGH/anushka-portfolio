import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-20 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slideUp">
              <div className="space-y-2">
                <h2 className="text-slate-600 text-sm font-semibold uppercase tracking-wider">
                  Welcome
                </h2>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm <span className="text-gradient">Anushka</span>
                </h1>
              </div>

              <p className="text-xl text-slate-700 leading-relaxed max-w-md">
                Performer, playwright, and poet exploring the boundaries and intersections of genre and form through my work.
              </p>

              <p className="text-slate-600 leading-relaxed max-w-md">
                Based in Los Angeles and Washington DC, I bring authenticity, depth, and artistry to every role. Check out my work and let's connect.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 smooth-transition"
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 smooth-transition"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl animate-fadeIn">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <p className="text-lg font-semibold">Professional Headshot</p>
                    <p className="text-sm mt-2">(Add your headshot image here)</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎬',
                title: 'Portfolio',
                description: 'Showcase of performances, projects, and creative work'
              },
              {
                icon: '🎥',
                title: 'Reel',
                description: 'Professional reel with scene clips and highlights'
              },
              {
                icon: '📸',
                title: 'Headshots',
                description: 'Professional headshots and resume download'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-slate-50 hover:bg-slate-100 smooth-transition border border-slate-100 hover:border-slate-200 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore My Work?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Dive into my portfolio, watch my reel, or reach out directly to discuss opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 smooth-transition"
            >
              Explore Portfolio
            </Link>
            <Link
              to="/reel"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 smooth-transition"
            >
              Watch Reel
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
