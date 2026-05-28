import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GeneratorPage from './pages/GeneratorPage';

const pageTransition = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition} transition={{ duration: 0.5 }}>
                <LandingPage />
              </motion.div>
            }
          />
          <Route
            path="/generator"
            element={
              <motion.div initial="hidden" animate="visible" exit="exit" variants={pageTransition} transition={{ duration: 0.5 }}>
                <GeneratorPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
