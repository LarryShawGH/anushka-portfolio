import { Play } from 'lucide-react'

interface ReelVideo {
  id: string
  title: string
  description: string
  thumbnail?: string
  url?: string
  duration: string
}

const reels: ReelVideo[] = [
  {
    id: '1',
    title: 'Performance Reel 2024',
    description: 'Compilation of scene clips and performance highlights from 2024',
    duration: '2:30'
  },
  {
    id: '2',
    title: 'Classical Theater Scenes',
    description: 'Dramatic scenes from stage performances',
    duration: '1:45'
  },
  {
    id: '3',
    title: 'Comedic Scenes',
    description: 'Showcase of comedic timing and range',
    duration: '1:20'
  },
  {
    id: '4',
    title: 'Film Reel',
    description: 'Selection of film and television appearances',
    duration: '2:00'
  },
  {
    id: '5',
    title: 'Monologues',
    description: 'Character monologues demonstrating dramatic range',
    duration: '3:15'
  },
  {
    id: '6',
    title: 'Recent Projects',
    description: 'Highlights from latest film and theater projects',
    duration: '1:50'
  }
]

export default function ReelPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedReel, setSelectedReel] = useState<ReelVideo | null>(null)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">My Reel</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Watch my performance highlights, scene selections, and recent projects
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <div
                key={reel.id}
                onMouseEnter={() => setHoveredId(reel.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedReel(reel)}
                className="group cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg smooth-transition group-hover:shadow-xl">
                  <div className="w-full h-full flex items-center justify-center bg-black/10 group-hover:bg-black/20 smooth-transition">
                    {hoveredId === reel.id && (
                      <div className="animate-fadeIn">
                        <Play className="w-16 h-16 text-white fill-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                    {reel.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-slate-700 smooth-transition">
                    {reel.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-slate-900">
                Professional Reel
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                This comprehensive reel showcases my range as a performer across various genres, mediums, and character types. From dramatic scenes to comedic moments, you'll see my versatility and commitment to the craft.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Each clip has been carefully selected to demonstrate not only technical skills but also emotional depth and authentic character work.
              </p>
              <div className="flex gap-4">
                <a
                  href="#download-reel"
                  className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 smooth-transition"
                >
                  Download HD Version
                </a>
                <a
                  href="#vimeo"
                  className="inline-block border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 smooth-transition"
                >
                  Watch on Vimeo
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-200 to-slate-300 aspect-video rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center text-slate-600">
                <Play className="w-16 h-16 mx-auto mb-2" />
                <p className="font-semibold">Main Reel Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center">
            Reel Specifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: 'Format',
                value: 'HD 1080p',
                details: 'Available in multiple formats'
              },
              {
                label: 'Length',
                value: '2:30',
                details: 'Optimized for agent submissions'
              },
              {
                label: 'Available On',
                value: 'Vimeo',
                details: 'Password protected link available upon request'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-sm text-slate-600 mb-2">{item.label}</p>
                <p className="font-serif text-2xl font-bold text-slate-900 mb-2">{item.value}</p>
                <p className="text-sm text-slate-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState } from 'react'
