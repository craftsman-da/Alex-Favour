import { Heart, MapPin, Calendar, Users, Plane } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-300" />
            <span className="font-serif text-xl">Liam & Olivia</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#story" className="hover:text-gray-900 transition-colors">Our Story</a>
            <a href="#party" className="hover:text-gray-900 transition-colors">Party</a>
            <a href="#travel" className="hover:text-gray-900 transition-colors">Travel</a>
            <a href="#registry" className="hover:text-gray-900 transition-colors">Registry</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <img
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Wedding couple"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-5xl md:text-6xl font-serif tracking-wider">
                JOIN US TO CELEBRATE
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 rounded-3xl p-12">
            <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Wedding rings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Join us to celebrate</p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Liam & Olivia
              </h2>
              <p className="text-gray-600 mb-6">June 15, 2025</p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              RSVP NOW
            </button>
          </div>
        </div>
      </section>

      <section id="story" className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              It's a love-at-first-swipe, corner-to-corner eye contact thing. We've through the most powerful moments and funny bad fortune to arrive at forever grateful moment.
            </p>
            <button className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors">
              GIFT NOW →
            </button>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Photo Gallery</h3>
            <p className="text-sm text-gray-600 mb-6">Relive the Memorable<br />Your Moments</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Gallery 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Gallery 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Gallery 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="party" className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-serif text-gray-800 mb-8">Wedding Party</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Emma Carter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Emma Carter</p>
                  <p className="text-sm text-gray-500">Everly Women</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Sarah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Sarah James</p>
                  <p className="text-sm text-gray-500">Everly Womans</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <Plane className="w-6 h-6 text-gray-600" />
              <h3 className="text-2xl font-serif text-gray-800">Travel & Stay</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sarah D'Antonio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">Sarah D'Antonio</p>
                <p className="text-sm text-gray-500">Reserve your accommodations<br />Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-rose-100 rounded-t-[100px] mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-20 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">5K</p>
              <p className="text-gray-600 text-sm">For Image</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">8.5K</p>
              <p className="text-gray-600 text-sm">Invitee</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">99%</p>
              <p className="text-gray-600 text-sm">U.S Stories</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gray-600" />
                <p className="text-sm text-gray-600 uppercase tracking-wider">COUPLE</p>
              </div>
              <h2 className="text-4xl font-serif text-gray-800 mb-8">
                Professional Cleaning<br />For Every Occasion
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Explore your 5 favorite strategies and family-style love what makes proper equipment. Save planning on housekeeping doesn.
              </p>

              <h3 className="text-3xl font-serif text-gray-800 mb-6">Celebrate Our Love</h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">LOCATION</p>
                    <p className="text-sm">Lovreac - the Historic Estate, Tourism, (Date TBD) - www.historic-estate.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">H & A LINHQUIN</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">ADULTS CEREMONIES</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Couple"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-rose-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "I LOVE AFFICIAL STORY, I'LL NEVER THROUGH THEMSELVES BEING NO EENIE. ARE SURE PROFESSIONAL EVENTS PERFECT! In this. 78% OF LONG-TO-MAY GUARANTEE IMMENSE OF ALL, PLEASE NO MORE TRAVEL"
              </p>
              <p className="font-medium text-gray-800">Dr. Kate</p>
              <p className="text-sm text-gray-500">Paris Tour</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "I HAVE ONE WES YOURSELF. 15AM TILL 2018. H.R. SWEDISH—12H. Bravo away run to the ultimate future. The greatest, a little intimate EXCUSE-K I PERSONAL All details or discounts?"
              </p>
              <p className="font-medium text-gray-800">JHB K. Nguyen</p>
              <p className="text-sm text-gray-500">Four impact</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Testimonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "TO OUR BEAULY TEACHERS, ER, (FRIENDS VISIT IT UPDATE HE HAT DAYS) MAID HIS HOT DAR EVENT STEAMED! SO-AE JINN-IS. Etroit Museum Grear!"
              </p>
              <p className="font-medium text-gray-800">Ava Evelyn</p>
              <p className="text-sm text-gray-500">Happy World</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-rose-100 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 text-sm text-gray-600 mb-8">
            <a href="#" className="hover:text-gray-900 transition-colors">CONFERENCES</a>
            <a href="#" className="hover:text-gray-900 transition-colors">WEDDINGS / GARDEN</a>
            <a href="#" className="hover:text-gray-900 transition-colors">@Lauren Booth</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Discord</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Follow</a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
              <span className="text-sm">𝕏</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
              <span className="text-sm">IG</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
