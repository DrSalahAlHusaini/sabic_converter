import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { ConvertButton } from './ConvertButton';
import { convertLatinToArabic, convertArabicToLatin } from '../utils/textConverter';

export const TextConverter: React.FC = () => {
  const [latinInput, setLatinInput] = useState('');
  const [arabicInput, setArabicInput] = useState('');
  const [latinOutput, setLatinOutput] = useState('');
  const [arabicOutput, setArabicOutput] = useState('');

  const handleLatinToArabic = () => {
    setArabicOutput(convertLatinToArabic(latinInput));
  };

  const handleArabicToLatin = () => {
    setLatinOutput(convertArabicToLatin(arabicInput));
  };

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          المحول من اللاتينية إلى العربية
          <span className="block text-lg font-normal text-gray-600 mt-1">
            Latin to Arabic
          </span>
        </h2>
        <TextArea
          id="latinToArabicInput"
          value={latinInput}
          onChange={(e) => setLatinInput(e.target.value)}
          placeholder="اكتب أو الصق هنا بالأحرف اللاتينية / Type or paste here in Latin letters..."
        />
        <div className="flex justify-center">
          <ConvertButton onClick={handleLatinToArabic} />
        </div>
        <TextArea
          id="latinToArabicOutput"
          value={arabicOutput}
          onChange={(e) => setArabicOutput(e.target.value)}
          placeholder="النص المحول سيظهر هنا / The converted text will appear here..."
          isArabic
        />
      </section>

      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          المحول من العربية إلى اللاتينية
          <span className="block text-lg font-normal text-gray-600 mt-1">
            Arabic to Latin
          </span>
        </h2>
        <TextArea
          id="arabicToLatinInput"
          value={arabicInput}
          onChange={(e) => setArabicInput(e.target.value)}
          placeholder="اكتب أو الصق هنا بالأحرف العربية / Write here in Arabic letters or paste..."
          isArabic
        />
        <div className="flex justify-center">
          <ConvertButton onClick={handleArabicToLatin} />
        </div>
        <TextArea
          id="arabicToLatinOutput"
          value={latinOutput}
          onChange={(e) => setLatinOutput(e.target.value)}
          placeholder="النص المحول سيظهر هنا / The converted text will appear here..."
        />
      </section>
    </div>
  );
};