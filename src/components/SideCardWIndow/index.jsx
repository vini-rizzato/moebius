import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

function CornerAccent({ color }) {
  return (
    <motion.svg
      viewBox="0 0 26 26"
      fill="none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.35, ease: "backOut" }}
    >
      <motion.path
        d="M2 24 L2 2 L24 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.55, duration: 0.45, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

function Stat({ label, value, color, delay }) {
  return (
    <motion.div
      className="side-card-stat"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <span className="side-card-stat-label">{label}</span>
      <span className="side-card-stat-value" style={{ color }}>
        {value}
      </span>
    </motion.div>
  );
}

export default function SideCardWindow({
  isOpen,
  onClose,
  title = "Arzach",
  subtitle = "1975",
  text = "Uma história sem palavras que redefiniu o que os quadrinhos podem ser.",
  image = null,
  accentColor = "#efc833",
  tag = "Obra",
  stats = [],
}) {

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>

          <motion.div
            className="side-card-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="side-card-window"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            <motion.div
              className="side-card-glow"
              style={{ background: accentColor }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="side-card-scanlines" />

            <div className="side-card-corner side-card-corner--tl">
              <CornerAccent color={accentColor} />
            </div>
            <div className="side-card-corner side-card-corner--br">
              <CornerAccent color={accentColor} />
            </div>

            <motion.button
              className="side-card-close"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
            >
              ✕
            </motion.button>

            {image && (
              <div className="side-card-image">
                <motion.img
                  src={image}
                  alt={title}
                  initial={{ scale: 1.1, filter: "saturate(0) brightness(0.6)" }}
                  animate={{ scale: 1, filter: "saturate(1) brightness(1)" }}
                  transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
                />
                <div className="side-card-image-overlay" />
              </div>
            )}

            <div className="side-card-content">

              <motion.span
                className="side-card-tag"
                style={{
                  color: accentColor,
                  background: `${accentColor}18`,
                  borderColor: `${accentColor}40`,
                  width: `fit-content`,
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                {tag}
              </motion.span>

              <motion.h2
                className="side-card-title"
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {title}
              </motion.h2>

              <motion.span
                className="side-card-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {subtitle}
              </motion.span>

              <motion.hr
                className="side-card-divider"
                style={{
                  background: `linear-gradient(to right, ${accentColor}, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
              />

              <motion.p
                className="side-card-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {text}
              </motion.p>

              {stats.length > 0 && (
                <div className="side-card-stats">
                  {stats.map((s, i) => (
                    <Stat
                      key={s.label}
                      label={s.label}
                      value={s.value}
                      color={accentColor}
                      delay={0.55 + i * 0.08}
                    />
                  ))}
                </div>
              )}

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.15)",
                  marginTop: "auto",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                Jean Giraud — Moebius
              </motion.span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
