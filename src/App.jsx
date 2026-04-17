import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useCallback } from "react";

import Hero from './sections/Hero';
import Biographic from './sections/Biographic';
import Cards from './sections/Cards';
import './App.css';

const SECTIONS = [
  { id: "hero", component: <Hero /> },
  { id: "biographic", component: <Biographic /> },
  { id: "cards", component: <Cards /> },
];

const TRANSITION = {
  duration: 0.9,
  ease: [0.76, 0, 0.24, 1], 
};

const variants = {
  enter: (dir) => ({
    y: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    y: "0%",
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    y: dir > 0 ? "-8%" : "8%",  
    opacity: 0,
    scale: 0.96,
  }),
};

function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isAnimating = useRef(false);

  const navigate = useCallback((dir) => {
    if (isAnimating.current) return;
    const next = index + dir;
    if (next < 0 || next >= SECTIONS.length) return;

    isAnimating.current = true;
    setDirection(dir);
    setIndex(next);

    setTimeout(() => {
      isAnimating.current = false;
    }, 950);
  }, [index]);

  const handleWheel = useCallback((e) => {
    if (Math.abs(e.deltaY) < 30) return; 
    navigate(e.deltaY > 0 ? 1 : -1);
  }, [navigate]);

  const handleKey = useCallback((e) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") navigate(1);
    if (e.key === "ArrowUp"   || e.key === "PageUp")   navigate(-1);
  }, [navigate]);

  return (
    <div
      className="App"
      onWheel={handleWheel}
      onKeyDown={handleKey}
      tabIndex={0}
      style={{ outline: "none" }}
    >
      {/* Indicador de seção */}
      <nav className="section-dots" aria-label="Navegação de seções">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`dot ${i === index ? "dot--active" : ""}`}
            onClick={() => navigate(i - index)}
            aria-label={`Ir para seção ${i + 1}`}
          />
        ))}
      </nav>

      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={TRANSITION}
          style={{ willChange: "transform, opacity" }}
        >
          {SECTIONS[index].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;