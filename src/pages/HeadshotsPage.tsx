import { Download, Eye } from 'lucide-react'

interface Headshot {
  id: string
  title: string
  type: string
  description: string
}

const headshots: Headshot[] = [
  {
    id: '1',
    title: 'Professional Headshot - Color',
    type: 'Professional',
    description: 'High resolution color portrait'
  },
  {
    id: '2',
    title: 'Professional Headshot - B&W',
    type: 'Professional',
    description: 'High resolution black & white portrait'
  },
  {
    id: '3',
    title: 'Character Headshot 1',
    type: 'Character',
    description: 'Character portrayal - dramatic'
  },
  {
    id: '4',
    title: 'Character Headshot 2',
    type: 'Character',
    description: 'Character portrayal - comedic'
  },
  {
    id: '5',
    title: 'Theatrical Look',
    type: 'Character',
    description: 'Stage makeup and styling'
  },
  {
    id: '6',
    title: 'Composite Sheet',
    type: 'Professional',
    description: 'Multiple looks in one sheet'
  }
]

export default function HeadshotsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Headshots & Resume
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional headshots and downloadable resume materials
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resume Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Resume</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Current Version</div>
                <p className="text-slate-600 text-sm mb-4">
                  Latest resume with all current credits and experience
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2 px-4 rounded font-semibold hover:bg-slate-800 smooth-transition">
                    <Download size={18} /> Download
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Theater Credits</div>
                <p className="text-slate-600 text-sm mb-4">
                  Complete theater production history and credits
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2 px-4 rounded font-semibold hover:bg-slate-800 smooth-transition">
                  <Download size={18} /> Download
                </button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-900 mb-2">Skills & Training</div>
                <p className="text-slate-600 text-sm mb-4">
                  Technical skills, training, and special abilities
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2 px-4 rounded font-semibold hover:bg-slate-800 smooth-transition">
                  <Download size={18} /> Download
                </button>
              </div>
            </div>
          </div>

          {/* Headshots Grid */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Professional Headshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {headshots.map((headshot) => (
                <div
                  key={headshot.id}
                  className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl smooth-transition"
                >
                  {/* Headshot Image */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center overflow-hidden">
                    <div className="text-slate-600 text-center">
                      <div className="text-5xl mb-2">📸</div>
                      <p className="text-sm font-semibold">{headshot.title}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 smooth-transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Eye className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Headshot Info */}
                  <div className="bg-white p-4 space-y-3 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                        {headshot.type}
                      </p>
                      <p className="text-slate-900 font-semibold mt-1">{headshot.title}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{headshot.description}</p>
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 flex items-center justify-center gap-2 text-slate-700 border border-slate-300 py-2 px-3 rounded font-semibold hover:bg-slate-50 smooth-transition text-sm">
                        <Eye size={16} /> View
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2 px-3 rounded font-semibold hover:bg-slate-800 smooth-transition text-sm">
                        <Download size={16} /> Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Headshot Info</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  Professional Quality
                </h3>
                <p className="text-slate-600 ml-8 mb-6">
                  High-resolution images suitable for casting directors, agents, and film festivals.
                </p>

                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  Multiple Formats
                </h3>
                <p className="text-slate-600 ml-8">
                  Available as individual headshots or composite sheets for print submissions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  Updated Regularly
                </h3>
                <p className="text-slate-600 ml-8 mb-6">
                  Headshots are updated to reflect current appearance and styling.
                </p>

                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                  Print Ready
                </h3>
                <p className="text-slate-600 ml-8">
                  All files are optimized for both digital and print applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
            Need High-Res Files?
          </h2>
          <p className="text-slate-700 text-lg mb-8">
            Contact me directly for high-resolution files, additional headshots, or custom versions for specific submissions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 smooth-transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
