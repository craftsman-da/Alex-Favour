import { Heart, MapPin, Calendar, Navigation, Download } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import traditionalInvite from './assets/traditional-invite.jpg';
import weddingInvite from './assets/wedding-invite.jpg';

export function CeremonyDetails() {
  const { type } = useParams();
  const { selectedColorIndex } = useTheme();
  const themeColor = selectedColorIndex === 0 ? '#facc15' : selectedColorIndex === 1 ? '#059669' : '#1e3a8a';

  const isWedding = type === 'wedding';
  
  const details = isWedding ? {
    title: 'Wedding Ceremony',
    date: 'January 17th, 2026',
    time: '10:00 AM',
    venue: 'Kingdom of Mercy Ministries, Lagos',
    address: '5/7 Toyin Popoola Cres, Ikosi Ketu, Lagos',
    mapLink: 'https://maps.google.com/?q=Kingdom+of+Mercy+Ministries,+Lagos,+Nigeria',
    image: weddingInvite,
    filename: 'Ifesinachi_Chioma_Wedding_Invite.jpg',
    colors: [
      { name: 'Emerald', bg: 'bg-emerald-700' },
      { name: 'Gold', bg: 'bg-yellow-500' },
      { name: 'White', bg: 'bg-white border border-gray-200' }
    ]
  } : {
    title: 'Traditional Marriage',
    date: 'January 2nd, 2026',
    time: '1:00 PM',
    venue: 'Amaezekwe Community, Ebonyi State',
    address: "Ngwuta Nwankwo's Compound, Amaezekwe Community, Ezza South L.G.A, Ebonyi State",
    mapLink: "https://maps.google.com/?q=Ngwuta+Nwankwo's+Compound,+Amaezekwe+Community,+Ezza+South+L.G.A,+Ebonyi+State",
    image: traditionalInvite,
    filename: 'Ifesinachi_Chioma_Traditional_Invite.jpg',
    colors: [
      { name: 'Navy Blue', bg: 'bg-blue-900' },
      { name: 'Oxblood', bg: 'bg-[#4a0404]' },
      { name: 'Gold', bg: 'bg-yellow-500' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-300" />
            <span className="font-serif text-xl">Ifesinachi & Chioma</span>
          </div>
          <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            ← Back
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Image Container */}
            <div className="relative bg-gray-100">
               <img 
                  src={details.image} 
                  alt={`${details.title} Invitation`} 
                  className="w-full h-auto object-contain max-h-[80vh] mx-auto"
                />
            </div>

            {/* Actions & Details Bar */}
            <div className="p-6 md:p-8 bg-white">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                
                {/* Text Details (Minimal) */}
                <div className="text-center md:text-left space-y-1">
                  <h2 className="font-serif text-2xl text-gray-900">{details.title}</h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{details.date} • {details.time}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{details.venue}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  <a 
                    href={details.mapLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-transform hover:scale-105 shadow-md"
                    style={{ backgroundColor: themeColor }}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  
                  <button 
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = details.image;
                        link.download = details.filename;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Save Image
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 my-8"></div>

              {/* Colors Section */}
              <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-sm text-gray-500 uppercase tracking-wider">Colors of the Day</span>
                <div className="flex gap-6">
                  {details.colors.map((color, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className={`w-12 h-12 rounded-full ${color.bg} shadow-sm ring-2 ring-offset-2 ring-gray-100`}></div>
                      <span className="text-xs text-gray-600">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
