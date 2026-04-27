"use client";
import { useLang } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

export const useTranslation = () => {
  const { lang } = useLang();
  return t(lang);
};
