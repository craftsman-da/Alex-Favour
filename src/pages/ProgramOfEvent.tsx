import { Heart, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.tsx';
import { COLORS } from '../components/CeremonyCards.tsx';
import { programData } from '../data/programData';

export function ProgramOfEvent() {
  const { selectedColorIndex: selected } = useTheme();
  const selectedColor = COLORS[selected];
  const [activeTab, setActiveTab] = useState(0);

  const tabNames = Object.keys(programData) as Array<keyof typeof programData>;
  const currentTabData = programData[tabNames[activeTab]];
  const currentEvents = currentTabData.events;
  const currentVenue = currentTabData.venue;

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-300" />
              <span className="font-serif text-xl">Ifesinachi & Chioma</span>
            </div>
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-4">
              Program of Event
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore the detailed schedule for both the Church Service and Grand Reception!
            </p>
            <div className="inline-block px-8 py-4 rounded-2xl" style={{ backgroundColor: `${selectedColor.value}20` }}>
              <p className="text-gray-800 font-medium">17th January 2026 • Kingdom of Mercy Ministries & Reception Venue, Lagos</p>
            </div>
          </div>
        </section>

        {/* Timeline Section with Tabs */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              {tabNames.map((tabName, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeTab === index ? selectedColor.value : undefined,
                  }}
                >
                  {tabName}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
                style={{ backgroundColor: `${selectedColor.value}40` }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {currentEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
                  >
                    {/* Content */}
                    <div className="w-full md:w-[calc(50%-24px)] md:px-6">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <p className="font-semibold text-sm" style={{ color: selectedColor.value }}>
                                {event.time}
                              </p>
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 relative z-10">
                      <div
                        className="w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: selectedColor.value }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Mobile spacer */}
                    <div className="hidden w-full md:w-[calc(50%-24px)]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-20 px-6 theme-section-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">Important Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: selectedColor.value }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Venue</h3>
                <p className="text-gray-600 text-sm">
                  {currentVenue}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <Clock className="w-8 h-8 mx-auto mb-4" style={{ color: selectedColor.value }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Timing</h3>
                <p className="text-gray-600 text-sm">
                  Guests are requested to arrive by {activeTab === 0 ? '8:00 AM' : '1:00 PM'}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <Heart className="w-8 h-8 mx-auto mb-4" style={{ color: selectedColor.value }} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dress Code</h3>
                <p className="text-gray-600 text-sm">
                  Semi-formal to Formal Attire
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">We Can't Wait to Celebrate with You!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Please RSVP by 10th December 2025 to confirm your attendance
            </p>
            <button
              className="px-8 py-3 rounded-full text-base font-medium text-white transition-colors"
              style={{
                backgroundColor: selectedColor.value,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              RSVP NOW
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="theme-section-light px-6 py-12 border-t border-gray-200">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Ifesinachi & Chioma • 17th January 2026
            </p>
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
    </>
  );
}
