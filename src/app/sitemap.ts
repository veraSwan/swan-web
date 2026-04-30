import { MetadataRoute } from 'next';

const BASE = 'https://swanweb.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE,                                        lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`,                             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/portfolio`,                         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contact`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Case studies — featured
    { url: `${BASE}/noir-elan`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/maison-atelier`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/aureline-district`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/calma-studio`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Case studies — portfolio sub-pages
    { url: `${BASE}/portfolio/aura-clinic`,             lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/portfolio/daniel-kanzlei`,          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/portfolio/linia-studio-wnetrz`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/portfolio/smile-studio`,            lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/portfolio/stal-mar`,                lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/portfolio/tessera`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
