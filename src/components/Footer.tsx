import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Anushka Shah</h3>
            <p className="text-slate-400 text-sm">
              Performer, playwright, and poet based in LA and Washington DC. Exploring the boundaries and intersections of genre and form.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#portfolio" className="hover:text-white smooth-transition">Portfolio</a></li>
              <li><a href="#reel" className="hover:text-white smooth-transition">Reel</a></li>
              <li><a href="#headshots" className="hover:text-white smooth-transition">Headshots</a></li>
              <li><a href="#contact" className="hover:text-white smooth-transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@anushkashahactor.com" className="hover:text-white smooth-transition">
                  hello@anushkashahactor.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Los Angeles & Washington DC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 pb-4">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#instagram" className="text-slate-400 hover:text-white smooth-transition" title="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c0 2.297-1.852 4.157-4.146 4.157H7.705c-2.294 0-4.146-1.86-4.146-4.157V8.108c0-2.297 1.852-4.157 4.146-4.157h4.59c2.294 0 4.146 1.86 4.146 4.157v7.784z"/>
              </svg>
            </a>
            <a href="#linkedin" className="text-slate-400 hover:text-white smooth-transition" title="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="#imdb" className="text-slate-400 hover:text-white smooth-transition" title="IMDb">
              <ExternalLink size={20} />
            </a>
          </div>
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; {currentYear} Anushka Shah. All rights reserved.</p>
            <p className="mt-2">Designed & Built with care</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
