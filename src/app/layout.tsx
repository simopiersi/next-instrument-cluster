import React from 'react';
import './globals.css'; // If you have global styles
import { Inter } from 'next/font/google';
import { GridContainer } from './components/GridContainer';

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, padding: 0 }}>
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
        
        {/* Grid container with keyboard navigation */}
        <GridContainer />
        
      </body>
    </html>
  );
}
