import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  type: 'film' | 'theater' | 'web'
  description: string
  role: string
  year: number
  tags: string[]
  image?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Title of Your Recent Film Project',
    type: 'film',
    description: 'A compelling narrative about identity and belonging.',
    role: 'Lead Role',
    year: 2024,
    tags: ['Drama', 'Independent Film']
  },
  {
    id: '2',
    title: 'Original Theater Production',
    type: 'theater',
    description: 'A devised piece exploring boundaries of genre and form.',
    role: 'Co-Creator & Performer',
    year: 2024,
    tags: ['Contemporary Theater', 'Devised']
  },
  {
    id: '3',
    title: 'Featured Web Series',
    type: 'web',
    description: 'Supporting role in an acclaimed streaming series.',
    role: 'Supporting Role',
    year: 2023,
    tags: ['Web Series', 'Comedy-Drama']
  },
  {
    id: '4',
    title: 'Classical Theater Production',
    type: 'theater',
    description: 'Playing a complex character in a reimagined classic.',
    role: 'Principal Role',
    year: 2023,
    tags: ['Classical', 'Ensemble']
  },
  {
    id: '5',
    title: 'Independent Short Film',
    type: 'film',
    description: 'Award-winning short film at multiple festivals.',
    role: 'Lead Role',
    year: 2023,
    tags: ['Short Film', 'Festival Selection']
  },
  {
    id: '6',
    title: 'Theater Workshop & Development',
    type: 'theater',
    description: 'New work development with experimental theater company.',
    role: 'Performer & Creative Collaborator',
    year: 2022,
    tags: ['New Work', 'Workshop']
  }
]

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | 'film' | 'theater' | 'web'>('all')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.type === filter)

  const typeColors = {
    film: 'bg-blue-100 text-blue-800',
    theater: 'bg-purple-100 text-purple-800',
    web: 'bg-green-100 text-green-800'
  }

  const typeLabels = {
    film: 'Film',
    theater: 'Theater',
    web: 'Web'
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of performances, projects, and creative collaborations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'film', 'theater', 'web'].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type as 'all' | 'film' | 'theater' | 'web')}
                className={`px-6 py-2 rounded-full font-semibold smooth-transition ${
                  filter === type
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {type === 'all' ? 'All Works' : typeLabels[type as keyof typeof typeLabels]}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-200 to-slate-300 shadow-lg smooth-transition group-hover:shadow-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-slate-600">
                      <div className="text-4xl mb-2">
                        {item.type === 'film' ? '🎬' : item.type === 'theater' ? '🎭' : '📺'}
                      </div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute top-3 right-3 ${typeColors[item.type]} px-3 py-1 rounded-full text-xs font-semibold smooth-transition`}
                  >
                    {typeLabels[item.type]}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-slate-700 smooth-transition">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{item.year}</p>
                  </div>

                  <p className="text-slate-700 line-clamp-2">
                    {item.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">
                      Role: <span className="text-slate-900">{item.role}</span>
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {hoveredId === item.id && (
                    <div className="pt-2 animate-slideUp">
                      <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 smooth-transition">
                        Learn More
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No works in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and creative partnerships. Let's create something meaningful together.
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
