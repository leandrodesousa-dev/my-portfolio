"use client";

import { Suspense } from 'react';
import Header from './Header';

const HEADER_HEIGHT = '64px';

export default function HeaderClientWrapper() {
  return (
    <Suspense 
      fallback={
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            height: HEADER_HEIGHT,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderBottom: '1px solid #e5e7eb',
          }}
        />
      }
    >
      <Header />
    </Suspense>
  );
}