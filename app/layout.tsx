import FullScreenBackground from '@/app/components/background';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from './components/Footer';
import Header from './components/Header';
import { MathJaxProvider } from './components/MathJaxProvider';
import './css/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <Analytics/>
          <SpeedInsights/>
          <div className="z-[-1]">
            <FullScreenBackground />
          </div>
          <main className="flex-grow"><MathJaxProvider>{children}</MathJaxProvider></main>
          <Footer />
        </div>
      </body>
    </html>
  );
}