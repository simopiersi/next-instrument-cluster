'use client';

import React, { useEffect, useState } from 'react';

export function GridContainer() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const GRID_COLS = 5;
  const GRID_ROWS = 2;
  const TOTAL_CELLS = GRID_COLS * GRID_ROWS;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case 'ArrowRight':
          setSelectedIndex((prev: number) => (prev + 1) % TOTAL_CELLS);
          break;
        case 'ArrowLeft':
          setSelectedIndex((prev: number) => (prev - 1 + TOTAL_CELLS) % TOTAL_CELLS);
          break;
        case 'ArrowUp':
          setSelectedIndex((prev: number) => {
            const newIndex = prev - GRID_COLS;
            return newIndex < 0 ? prev + (GRID_COLS * (GRID_ROWS - 1)) : newIndex;
          });
          break;
        case 'ArrowDown':
          setSelectedIndex((prev: number) => {
            const newIndex = prev + GRID_COLS;
            return newIndex >= TOTAL_CELLS ? prev % GRID_COLS : newIndex;
          });
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-5" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: '1.25rem',
      width: '1920px',
      height: '720px',
      zIndex: 10,
    }}>
      {Array.from({ length: TOTAL_CELLS }).map((_, index) => (
        <div
          key={index}
          className={`grid-slot bg-zinc-800 p-4`}
          style={{
            border: selectedIndex === index ? '4px solid rgb(249, 115, 22)' : 'none',
            outline: 'none',
          }}
          tabIndex={0}
        />
      ))}
    </div>
  );
} 