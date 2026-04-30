'use client';

import { useEffect } from 'react';

/**
 * Page-level error boundary.
 * Also handles ChunkLoadError that occurs during client-side navigation
 * (e.g. navigating to /portfolio after the deployment replaced chunk files).
 */
export default function Error({
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
        window.location.href =
          window.location.pathname + '?v=' + Date.now();
      } else {
        sessionStorage.removeItem(key);
      }
    }
  }, [error]);

  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08090C',
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
          Odśwież
        </button>
      </div>
    </div>
  );
}
