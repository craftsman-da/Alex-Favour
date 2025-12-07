import { Heart, Gift, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function GiftRegistry() {
  const { selectedColorIndex } = useTheme();
  const themeColor = selectedColorIndex === 0 ? '#facc15' : selectedColorIndex === 1 ? '#059669' : '#1e3a8a';
  
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankDetails = [
    {
      id: 'bank1',
      bankName: 'Opay',
      accountNumber: '9032267633',
      accountName: 'Ugwuoke Ifesinachi Alex',
    },
    {
      id: 'bank2',
      bankName: 'Opay',
      accountNumber: '8142620773',
      accountName: 'Paul Favour Chioma',
    }
  ];

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
            ← Back to Home
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Gift Registry</h1>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift, a cash gift would be highly appreciated to help us start our new life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bankDetails.map((bank) => (
              <div key={bank.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: themeColor }}></div>
                
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Bank Transfer</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Bank Name</p>
                    <p className="font-medium text-gray-900">{bank.bankName}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Account Name</p>
                    <p className="font-medium text-gray-900">{bank.accountName}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Account Number</p>
                    <div className="flex items-center gap-3">
                      <p className="font-mono text-2xl text-gray-900 tracking-wider">{bank.accountNumber}</p>
                      <button 
                        onClick={() => handleCopy(bank.accountNumber, bank.id)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        title="Copy Account Number"
                      >
                        {copied === bank.id ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              "God loves a cheerful giver. And God is able to bless you abundantly..." <br/>
              <span className="not-italic font-medium text-gray-600">- 2 Corinthians 9:7-8</span>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
