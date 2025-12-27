import { Heart, Clock, MapPin, Download } from 'lucide-react';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useTheme } from '../context/ThemeContext.tsx';
import { programData } from '../data/programData';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const timelineItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Mobile-specific slide variants
const mobileSlideIn: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function ProgramOfEvent() {
  const { currentColor } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabNames = Object.keys(programData) as Array<keyof typeof programData>;
  const currentTabData = programData[tabNames[activeTab]];
  const currentEvents = currentTabData.events;
  const currentVenue = currentTabData.venue;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const pdfThemeColor = currentColor.value;

    const addBorder = () => {
      doc.setDrawColor(pdfThemeColor);
      doc.setLineWidth(0.5);
      doc.rect(5, 5, pageWidth - 10, pageHeight - 10);
      doc.setLineWidth(0.2);
      doc.rect(7, 7, pageWidth - 14, pageHeight - 14);
    };

    const addHeader = (title: string, venue: string) => {
      addBorder();

      doc.setFont('times', 'italic');
      doc.setFontSize(24);
      doc.setTextColor(pdfThemeColor);
      doc.text('Ifesinachi & Chioma', pageWidth / 2, 25, { align: 'center' });

      doc.setFont('times', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Saturday, 17th January 2026', pageWidth / 2, 33, {
        align: 'center',
      });

      doc.setDrawColor(200, 200, 200);
      doc.line(pageWidth / 2 - 20, 38, pageWidth / 2 + 20, 38);

      doc.setFont('times', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(60, 60, 60);
      doc.text(title.toUpperCase(), pageWidth / 2, 50, { align: 'center' });

      doc.setFont('times', 'italic');
      doc.setFontSize(10);
      doc.setTextColor(120, 120, 120);
      doc.text(venue, pageWidth / 2, 58, { align: 'center', maxWidth: 160 });
    };

    // Page 1: Church Service
    const churchData = programData['The Church Service'];
    addHeader('The Church Service', churchData.venue);

    autoTable(doc, {
      startY: 70,
      head: [],
      body: churchData.events.map((e) => [e.time, e.title, e.description]),
      theme: 'plain',
      styles: {
        font: 'times',
        fontSize: 11,
        cellPadding: 4,
        valign: 'top',
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 30, fontStyle: 'bold', textColor: pdfThemeColor },
        1: { cellWidth: 50, fontStyle: 'bold', textColor: [60, 60, 60] },
        2: {
          cellWidth: 'auto',
          fontStyle: 'italic',
          textColor: [100, 100, 100],
        },
      },
      didDrawCell: (data) => {
        if (data.section === 'body' && data.column.index === 2) {
          doc.setDrawColor(240, 240, 240);
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
    });

    // Page 2: Reception
    doc.addPage();
    const receptionData = programData['The Grand Reception'];
    addHeader('The Grand Reception', receptionData.venue);

    autoTable(doc, {
      startY: 70,
      head: [],
      body: receptionData.events.map((e) => [e.time, e.title, e.description]),
      theme: 'plain',
      styles: {
        font: 'times',
        fontSize: 11,
        cellPadding: 4,
        valign: 'top',
        overflow: 'linebreak',
      },
      columnStyles: {
        0: { cellWidth: 30, fontStyle: 'bold', textColor: pdfThemeColor },
        1: { cellWidth: 50, fontStyle: 'bold', textColor: [60, 60, 60] },
        2: {
          cellWidth: 'auto',
          fontStyle: 'italic',
          textColor: [100, 100, 100],
        },
      },
      didDrawCell: (data) => {
        if (data.section === 'body' && data.column.index === 2) {
          doc.setDrawColor(240, 240, 240);
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
      },
    });

    doc.save('Ifesinachi_Chioma_Program.pdf');
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100'
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex items-center gap-2'
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className={`w-5 h-5 ${currentColor.text} opacity-60`} />
            </motion.div>
            <span className='font-serif text-xl'>Ifesinachi & Chioma</span>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='/'
            className={`text-sm font-medium text-gray-600 ${currentColor.hover.replace(
              'bg',
              'hover:text'
            )} transition-colors`}
          >
            ← Back to Home
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className='py-16 px-6 bg-gradient-to-b from-gray-50 to-white'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className='max-w-4xl mx-auto text-center'
        >
          <motion.h1
            variants={fadeInUp}
            className='text-5xl md:text-6xl font-serif text-gray-900 mb-4'
          >
            Program of Event
          </motion.h1>
          <motion.p variants={fadeInUp} className='text-lg text-gray-600 mb-8'>
            Explore the detailed schedule for both the Church Service and Grand
            Reception!
          </motion.p>
          <motion.div
            variants={scaleIn}
            className='inline-block px-8 py-4 rounded-2xl mb-8'
            style={{ backgroundColor: `${currentColor.value}20` }}
          >
            <p className='text-gray-800 font-medium'>
              17th January 2026 • Kingdom of Mercy Ministries & Reception Venue,
              Lagos
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadPDF}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-lg ${currentColor.hover} transition-all`}
              style={{ backgroundColor: currentColor.value }}
            >
              <Download className='w-5 h-5' />
              Download Program PDF
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section with Tabs */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto'>
          {/* Tab Buttons */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='flex flex-col sm:flex-row gap-4 mb-12 justify-center'
          >
            {tabNames.map((tabName, index) => (
              <motion.button
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor:
                    activeTab === index ? currentColor.value : undefined,
                }}
              >
                {tabName}
              </motion.button>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className='relative'>
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.2 }}
              className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full rounded-full origin-top'
              style={{ backgroundColor: `${currentColor.value}40` }}
            ></motion.div>

            {/* Timeline Items */}
            <motion.div
              key={activeTab}
              initial='hidden'
              animate='visible'
              variants={staggerContainer}
              className='space-y-12'
            >
              {currentEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, margin: '-50px', amount: 0.3 }}
                  variants={timelineItem}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } gap-8 items-center relative`}
                >
                  {/* Mobile Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className={`absolute left-4 w-4 h-4 rounded-full border-2 border-white shadow-sm md:hidden transform -translate-x-1/2 z-10 ${currentColor.bg}`}
                  ></motion.div>

                  {/* Content */}
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-50px', amount: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6, ease: 'easeOut' },
                      },
                    }}
                    className='w-full md:w-[calc(50%-24px)] pl-12 md:px-6'
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                      className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
                    >
                      <div className='flex items-start gap-4'>
                        <div className='flex-1'>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className='flex items-center gap-2 mb-2'
                          >
                            <Clock className='w-4 h-4 text-gray-500' />
                            <p
                              className='font-semibold text-sm'
                              style={{ color: currentColor.value }}
                            >
                              {event.time}
                            </p>
                          </motion.div>
                          <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className='text-xl font-serif text-gray-900 mb-2'
                          >
                            {event.title}
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className='text-gray-600 text-sm'
                          >
                            {event.description}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Timeline Dot - Desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className='hidden md:flex items-center justify-center w-16 h-16 relative z-10'
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.4 }}
                      className='w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center'
                      style={{ backgroundColor: currentColor.value }}
                    >
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    </motion.div>
                  </motion.div>

                  {/* Desktop spacer */}
                  <div className='hidden md:block w-full md:w-[calc(50%-24px)]'></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className='py-20 px-6 bg-gray-50'>
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className='text-4xl font-serif text-gray-900 mb-12 text-center'
          >
            Important Information
          </motion.h2>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className='grid md:grid-cols-3 gap-8'
          >
            {[
              {
                icon: MapPin,
                title: 'Venue',
                description: currentVenue,
              },
              {
                icon: Clock,
                title: 'Timing',
                description: `Guests are requested to arrive by ${
                  activeTab === 0 ? '8:00 AM' : '1:00 PM'
                }`,
              },
              {
                icon: Heart,
                title: 'Dress Code',
                description: 'Semi-formal to Formal Attire',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
                transition={{ duration: 0.3 }}
                className='bg-white rounded-2xl p-8 text-center shadow-lg'
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon
                    className='w-8 h-8 mx-auto mb-4'
                    style={{ color: currentColor.value }}
                  />
                </motion.div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {card.title}
                </h3>
                <p className='text-gray-600 text-sm'>{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-50 px-6 py-12 border-t border-gray-200'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='max-w-7xl mx-auto text-center'
        >
          <motion.p variants={fadeInUp} className='text-gray-600 mb-4'>
            Ifesinachi & Chioma • 17th January 2026
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className='flex justify-center gap-4'
          >
            {[
              { label: 'Twitter', icon: '𝕏' },
              { label: 'Instagram', icon: 'IG' },
            ].map((social) => (
              <motion.a
                key={social.label}
                variants={scaleIn}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href='#'
                className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors'
                aria-label={social.label}
              >
                <span className='text-sm'>{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
