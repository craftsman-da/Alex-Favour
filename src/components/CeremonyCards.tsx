
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const COLORS = [ 
  {
    name: 'Golden Yellow',
    bg: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
    border: 'border-yellow-500',
    value: '#facc15',
    rgb: '250, 204, 21',
  },
  {
    name: 'Emerald Green',
    bg: 'bg-emerald-600',
    hover: 'hover:bg-emerald-700',
    border: 'border-emerald-600',
    value: '#059669',
    rgb: '5, 150, 105',
  },
  {
    name: 'Navy Blue',
    bg: 'bg-blue-900',
    hover: 'hover:bg-blue-950',
    border: 'border-blue-900',
    value: '#1e3a8a',
    rgb: '30, 58, 138',
  },
];

export function CeremonyCards() {
  const [selected, setSelected] = useState(0);

  // Set theme color on document root 
  const setThemeColor = (color: string, rgb: string) => {
    document.documentElement.style.setProperty('--theme-primary', color);
    document.documentElement.style.setProperty('--theme-r', rgb.split(',')[0].trim());
    document.documentElement.style.setProperty('--theme-g', rgb.split(',')[1].trim());
    document.documentElement.style.setProperty('--theme-b', rgb.split(',')[2].trim());
  };

  // Update theme color when selected changes
  useEffect(() => {
    setThemeColor(COLORS[selected].value, COLORS[selected].rgb);
  }, [selected]);

  return (
    <div className="mt-12 flex flex-col gap-32"> 
      {/* Wedding - image right, text left */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <Link to="/gallery" className="relative w-full md:w-[340px] h-[340px] flex-shrink-0 flex items-center justify-center group cursor-pointer">
          <img
            src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Wedding Ceremony"
            className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-wider text-gray-500">REGULAR</span>
          </div>
          <h3 className="text-5xl font-serif text-gray-900 mb-2">
            Wedding <span className="italic text-gray-500">Ceremony</span>.
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">Meet the couple, discover the wedding party, and get all the details for the big celebration.</p>
          <div className="mb-8 w-full max-w-xl">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Colour of the Day</h4>
            <div className="flex gap-3">
              {COLORS.map((color, idx) => (
                <button
                  key={color.name}
                  type="button"
                  className={`w-10 h-10 rounded-2xl border-2 shadow-sm transition-all duration-300 cursor-pointer flex items-center justify-center ${color.bg} ${color.border} ${color.hover} ${selected === idx ? 'border-4 border-black/70 ring-2 ring-black/20' : ''}`}
                  aria-label={color.name}
                  onClick={() => setSelected(idx)}
                >
                  {selected === idx && (
                    <svg className="w-5 h-5 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              {COLORS.map((color, idx) => (
                <span key={color.name} className={`text-xs text-gray-600 font-medium w-10 text-center ${selected === idx ? 'font-bold text-black' : ''}`}>{color.name}</span>
              ))}
            </div>
          </div>
          <a
            href="/ceremony-details/wedding"
            className="inline-block px-8 py-3 rounded-full text-base font-medium border border-gray-200 bg-[var(--theme-primary)/30] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white transition-colors shadow"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}