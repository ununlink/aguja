import './globals.css';
import type { Metadata } from 'next';
import { Jacques_Francois, Familjen_Grotesk } from 'next/font/google';

const inter = Familjen_Grotesk({ weight: '600', preload: false });
const aguja = Jacques_Francois({ weight: '400', preload: false });

export const metadata: Metadata = {
  title: 'aguja',
  description: 'musica electronica I',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={aguja.className}>{children}</body>
    </html>
  );
}
