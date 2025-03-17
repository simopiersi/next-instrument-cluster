import React from 'react';
import './globals.css'; // If you have global styles

export const metadata = {
  title: 'Digital Instrument Cluster',
  description: 'Automotive digital instrument cluster',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* First render the page content (black background) */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}>
          {children}
        </div>
        
        {/* Then render the grid on top with a higher z-index */}
        <div className="p-4" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)', // 5 equal columns
          gridTemplateRows: 'repeat(2, 1fr)',     // 2 equal rows
          gap: '1rem',                             // Small gap between grid items
          width: '1920px',                        // 8 units wide
          height: '720px',                        // 3 units high
          zIndex: 10,                             // Higher z-index to appear on top
        }}>
          {/* Grid slots - 10 total (5 columns × 2 rows) */}
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
          <div className="grid-slot bg-zinc-800 p-4"></div>
        </div>
      </body>
    </html>
  );
}
