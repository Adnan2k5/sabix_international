import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import DesignControls from './components/DesignControls';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

/* ── Lazy-loaded pages (code splitting) ── */
const Home                      = lazy(() => import('./pages/Home'));
const AluminiumGlassAccessories = lazy(() => import('./pages/AluminiumGlassAccessories'));
const ToolsHardware             = lazy(() => import('./pages/ToolsHardware'));
const SpareParts                = lazy(() => import('./pages/SpareParts'));
const About                     = lazy(() => import('./pages/About'));
const Contact                   = lazy(() => import('./pages/Contact'));
const Products                  = lazy(() => import('./pages/Products'));
const Solutions                 = lazy(() => import('./pages/Solutions'));

/* ── Page loading fallback ── */
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-8 h-[2px] animate-pulse"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      />
      <span className="text-eyebrow" style={{ color: 'var(--color-muted)' }}>Loading</span>
    </div>
  </div>
);

/* ── Helper: wrap any page component in PageTransition + Suspense ── */
const Page = ({ Component }) => (
  <PageTransition>
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  </PageTransition>
);

/* ── Animated routes — must be inside BrowserRouter to use useLocation ── */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Core pages */}
        <Route path="/"                            element={<Page Component={Home} />} />
        <Route path="/aluminium-glass-accessories" element={<Page Component={AluminiumGlassAccessories} />} />
        <Route path="/tools-hardware"              element={<Page Component={ToolsHardware} />} />
        <Route path="/spare-parts"                 element={<Page Component={SpareParts} />} />

        {/* Nav pages */}
        <Route path="/about"     element={<Page Component={About} />} />
        <Route path="/contact"   element={<Page Component={Contact} />} />
        <Route path="/products"  element={<Page Component={Products} />} />
        <Route path="/solutions" element={<Page Component={Solutions} />} />
      </Routes>
    </AnimatePresence>
  );
};

/* ── App root ── */
const App = () => (
  <BrowserRouter>
    {/* ScrollToTop must be inside BrowserRouter so it can use useLocation */}
    <ScrollToTop />
    <Header />
    <main id="main-content" tabIndex={-1}>
      <AnimatedRoutes />
    </main>
    <Footer />
    <DesignControls />
  </BrowserRouter>
);

export default App;
