import { Heart, Clock, MapPin, Download } from 'lucide-react';
import { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const pdfThemeColor = '#059669'; // Emerald Green

    // Helper function to add decorative border
    const addBorder = () => {
      doc.setDrawColor(pdfThemeColor);
      doc.setLineWidth(0.5);
      doc.rect(5, 5, pageWidth - 10, pageHeight - 10); // Outer border
      doc.setLineWidth(0.2);
      doc.rect(7, 7, pageWidth - 14, pageHeight - 14); // Inner border
    };

    // Helper function to add header
    const addHeader = (title: string, venue: string) => {
      addBorder();
      
      // Wedding Couple Names
      doc.setFont('times', 'italic');
      doc.setFontSize(24);
      doc.setTextColor(pdfThemeColor);
      doc.text('Ifesinachi & Chioma', pageWidth / 2, 25, { align: 'center' });

      // Date
      doc.setFont('times', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Saturday, 17th January 2026', pageWidth / 2, 33, { align: 'center' });

      // Divider
      doc.setDrawColor(200, 200, 200);
      doc.line(pageWidth / 2 - 20, 38, pageWidth / 2 + 20, 38);

      // Section Title
      doc.setFont('times', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(60, 60, 60);
      doc.text(title.toUpperCase(), pageWidth / 2, 50, { align: 'center' });

      // Venue
      doc.setFont('times', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text(venue, pageWidth / 2, 58, { align: 'center', maxWidth: 160 });
    };

    // Page 1: Church Service
    const churchData = programData['The Church Service'];
    addHeader('The Church Service', churchData.venue);

    // Elegant Table
    autoTable(doc, {
      startY: 70,
      head: [], // No header for cleaner look
      body: churchData.events.map(e => [e.time, e.title, e.description]),
      theme: 'plain',
      styles: { 
        font: 'times',
        fontSize: 11,
        cellPadding: 4,
        valign: 'top',
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 30, fontStyle: 'bold', textColor: pdfThemeColor }, // Time
        1: { cellWidth: 50, fontStyle: 'bold', textColor: [60, 60, 60] }, // Event Title
        2: { cellWidth: 'auto', fontStyle: 'italic', textColor: [100, 100, 100] } // Description
      },
      didDrawCell: (data) => {
        // Add a subtle bottom border to each row for separation
        if (data.section === 'body' && data.column.index === 2) {
          doc.setDrawColor(240, 240, 240);
          doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
        }
      }
    });

    // Page 2: Reception
    doc.addPage();
    const receptionData = programData['The Grand Reception'];
    addHeader('The Grand Reception', receptionData.venue);

    autoTable(doc, {
      startY: 70,
      head: [],
      body: receptionData.events.map(e => [e.time, e.title, e.description]),
      theme: 'plain',
      styles: { 
        font: 'times',
        fontSize: 11,
        cellPadding: 4,
        valign: 'top',
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 30, fontStyle: 'bold', textColor: pdfThemeColor },
        1: { cellWidth: 50, fontStyle: 'bold', textColor: [60, 60, 60] },
        2: { cellWidth: 'auto', fontStyle: 'italic', textColor: [100, 100, 100] }
      },
      didDrawCell: (data) => {
        if (data.section === 'body' && data.column.index === 2) {
          doc.setDrawColor(240, 240, 240);
          doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
        }
      }
    });

    doc.save('Ifesinachi_Chioma_Program.pdf');
  };

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
            <div className="inline-block px-8 py-4 rounded-2xl mb-8" style={{ backgroundColor: `${selectedColor.value}20` }}>
              <p className="text-gray-800 font-medium">17th January 2026 • Kingdom of Mercy Ministries & Reception Venue, Lagos</p>
            </div>

            <div>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: selectedColor.value }}
              >
                <Download className="w-5 h-5" />
                Download Program PDF
              </button>
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
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full rounded-full"
                style={{ backgroundColor: `${selectedColor.value}40` }}
              ></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {currentEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 items-center relative`}
                  >
                    {/* Mobile Dot */}
                    <div 
                      className="absolute left-4 w-4 h-4 rounded-full border-2 border-white shadow-sm md:hidden transform -translate-x-1/2 z-10"
                      style={{ backgroundColor: selectedColor.value }}
                    ></div>

                    {/* Content */}
                    <div className="w-full md:w-[calc(50%-24px)] pl-12 md:px-6">
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

                    {/* Desktop spacer */}
                    <div className="hidden md:block w-full md:w-[calc(50%-24px)]"></div>
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
