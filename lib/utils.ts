import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = '263772111421';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello, I'd like to enquire about your services."
)}`;
export const PHONE = '0772111421';
export const EMAIL = 'info@vicfallsmentalhealth.co.zw';
export const ADDRESS = '206 Contours, Vic Falls Estate, Kazungula Road, Victoria Falls, Zimbabwe';
export const SOCIAL = '@vicfallsmentalhealth';
