import { latinToArabicMap, arabicToLatinMap } from './conversions';

const cleanupText = (text: string): string => {
  return text
    .replace(/\s+/g, ' ')    // Replace multiple spaces with single space
    .replace(/-/g, '')       // Remove hyphens
    .trim();                 // Remove leading/trailing whitespace
};

export const convertLatinToArabic = (text: string): string => {
  let result = cleanupText(text);
  
  // Sort patterns by length (longest first) to handle multi-character replacements
  const patterns = Array.from(latinToArabicMap.entries())
    .sort(([a], [b]) => b.length - a.length);

  // Apply conversions
  for (const [latin, arabic] of patterns) {
    const pattern = new RegExp(latin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(pattern, arabic);
  }

  // Format the result
  return result.split(' ').join('/ ');
};

export const convertArabicToLatin = (text: string): string => {
  let result = cleanupText(text);
  
  // Sort patterns by length (longest first)
  const patterns = Array.from(arabicToLatinMap.entries())
    .sort(([a], [b]) => b.length - a.length);

  // Apply conversions
  for (const [arabic, latin] of patterns) {
    const pattern = new RegExp(arabic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    result = result.replace(pattern, latin);
  }

  return result;
};