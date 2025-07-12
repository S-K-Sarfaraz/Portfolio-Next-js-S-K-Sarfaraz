import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'S K Sarfaraz - Full Stack Developer & Software Engineer',
  description: 'Official portfolio of S K Sarfaraz, a skilled full-stack developer and software engineer with expertise in React, React Native, Django, Next.js, and modern web/mobile technologies.',
  keywords: [
    'S K Sarfaraz',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'React Native Developer',
    'Django Developer',
    'Next.js Developer',
    'Web Development',
    'Mobile App Development',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Tech Portfolio',
    'MERN Stack Developer',
    'Full Stack Web Engineer'
  ],
  authors: [{ name: 'S K Sarfaraz' }],
  openGraph: {
    title: 'S K Sarfaraz - Full Stack Developer & Software Engineer',
    description: 'Explore the portfolio of S K Sarfaraz, a passionate full-stack developer building scalable web and mobile apps using React, Django, and Next.js.',
    type: 'website',
    url: 'https://yourdomain.com', // Replace with your actual domain
    siteName: 'S K Sarfaraz Portfolio',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: "/favicon.ico", // or .png if you're using PNG
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}