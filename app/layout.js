import './globals.css';
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: 'Portfolio | Senior Software Engineer',
  description: 'A premium futuristic portfolio of a senior software engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CustomCursor />
          <div className="grain-overlay" />
          <div className="mesh-gradient" />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
