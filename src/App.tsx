import React from 'react';
import { TextConverter } from './components/TextConverter';
import { Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="py-8 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4">
            <Globe2 className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              محولات النصوص بين اللاتينية والعربية
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2">
            معالجة الدكتور صلاح الحسيني
          </p>
        </div>
      </header>

      <main className="py-12">
        <TextConverter />
      </main>

      <footer className="py-6 bg-gray-50">
        <div className="text-center text-gray-600">
          <p>Dr. Salah Alhusaini &copy; {new Date().getFullYear()}</p>
          <a
            href="https://reach.link/salahalhusaini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            صفحة الويب
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;