'use client';

import { useEffect } from 'react';

/**
 * Root-level error boundary (replaces root layout on fatal error).
 * Automatically reloads with cache-busting URL on ChunkLoadError —
 * this fixes the "Application error" caused by stale HTML referencing
 * old JS/CSS chunk hashes after a new deployment on Hostinger.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed');

    if (isChunkError) {
      const key = '_swan_chunk_reload';
      const count = parseInt(sessionStorage.getItem(key) ?? '0', 10);
      if (count < 3) {
        sessionStorage.setItem(key, String(count + 1));
        // Hard redirect with cache-buster so nginx/CDN won't serve stale HTML
        window.location.href =
          window.location.pathname + '?v=' + Date.now();
      } else {
        sessionStorage.removeItem(key);
      }
    }
  }, [error]);

  return (
    <html lang="pl">
      <body
        style={{
          margin: 0,
          backgroundColor: '#08090C',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 400 }}>
            Ups, coś poszło nie tak
          </h2>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.75rem',
              backgroundColor: '#C05775',
              color: '#fff',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Odśwież stronę
          </button>
        </div>
      </body>
    </html>
  );
}
