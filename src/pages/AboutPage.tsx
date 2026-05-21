import { Award, BookOpen, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A journey of creative exploration and artistic commitment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                  Who I Am
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  I'm a performer, playwright, and poet based in Los Angeles and Washington DC. My work is rooted in a passion for exploring the boundaries and intersections of genre, form, and storytelling. I believe in the transformative power of art and use performance as a medium to challenge, inspire, and connect.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Whether on stage, in front of a camera, or behind the pen, I bring authenticity, depth, and nuance to every project. My diverse background allows me to approach characters and stories with fresh perspective and genuine commitment.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                  My Background
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-4">
                  With training in classical theater, contemporary performance, and devised work, I've developed a versatile skill set that spans multiple genres and mediums. My education and experience have shaped my approach to character work, script analysis, and collaborative creation.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  I'm committed to continuous growth, seeking out challenging roles and creative partnerships that push me beyond my comfort zone and contribute to meaningful art.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Location:</strong> LA & Washington DC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Training:</strong> Classical & Contemporary Theater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Focus:</strong> Stage, Film & Theater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span><strong>Languages:</strong> English, Hindi</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
                <h3 className="font-serif text-xl font-bold mb-3">Let's Connect</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Interested in collaborating or discussing opportunities?
                </p>
                <a
                  href="/contact"
                  className="inline-block w-full text-center bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 smooth-transition"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-12 text-center">
            What Drives My Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-100 text-center">
              <Award className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                Authenticity
              </h3>
              <p className="text-slate-600">
                Bringing genuine emotion and truth to every character and story I tell.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-100 text-center">
              <BookOpen className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                Exploration
              </h3>
              <p className="text-slate-600">
                Continuously pushing boundaries and exploring new forms of expression.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-100 text-center">
              <Users className="w-12 h-12 text-slate-900 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                Connection
              </h3>
              <p className="text-slate-600">
                Creating meaningful moments that resonate with audiences and collaborators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
