import type { ReactElement } from 'react';

import './globals.css';

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
