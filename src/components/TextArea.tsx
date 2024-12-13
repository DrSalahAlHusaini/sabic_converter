import React from 'react';

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isArabic?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  isArabic
}) => (
  <div className={`relative w-full max-w-2xl mx-auto ${isArabic ? 'text-right' : 'text-left'}`}>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-32 p-4 mb-4 border rounded-lg shadow-sm 
        focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none
        ${isArabic ? 'text-right' : 'text-left'}
        font-[system-ui] text-lg`}
      dir={isArabic ? 'rtl' : 'ltr'}
      style={{
        fontFeatureSettings: '"kern" 1',
        textRendering: 'optimizeLegibility',
      }}
    />
    <div className={`absolute top-2 ${isArabic ? 'left-2' : 'right-2'}`}>
      <span className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded">
        {isArabic ? 'عربي' : 'Latin'}
      </span>
    </div>
  </div>
);