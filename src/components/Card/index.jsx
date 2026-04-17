import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

function CornerAccent({ color, position }) {
  const positions = {
    "top-left":     { top: 0,    left: 0,  transform: "none" },
    "top-right":    { top: 0,    right: 0, transform: "rotate(90deg)" },
    "bottom-right": { bottom: 0, right: 0, transform: "rotate(180deg)" },
    "bottom-left":  { bottom: 0, left: 0,  transform: "rotate(270deg)" },
  };

  return (
    <motion.svg
      viewBox="0 0 28 28"
      fill="none"
      style={{ position: "absolute", width: 28, height: 28, ...positions[position] }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.4, ease: "backOut" }}
    >
      <motion.path
        d="M2 26 L2 2 L26 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export default function Card({
  title = "Arzach",
  subtitle = "1975",
  text = "",
  accentColor = "#efc833",
  img = null,
  tag = "Obra",
  index = 0,
  onExplore = () => {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const d = index * 0.15;

  return (
    <motion.div
      ref={ref}
      className="card-wrapper"
    >
      <motion.div
        className="card-root"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 60, rotateX: -15, scale: 0.92, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }
            : {}
        }
        transition={{ duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.015 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="card-glow"
          style={{ background: accentColor }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {isInView && (
          <>
            <CornerAccent color={accentColor} position="top-left" />
            <CornerAccent color={accentColor} position="bottom-right" />
          </>
        )}

        {img && (
          <div className="card-image-wrapper">
            <motion.img
              src={img}
              alt={title}
              className="card-image"
              initial={{ scale: 1.12, filter: "saturate(0)" }}
              animate={
                isInView
                  ? { scale: 1, filter: "saturate(1)" }
                  : {}
              }
              transition={{ delay: d + 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.4 } }}
            />
            <div className="card-image-fade" />
          </div>
        )}

        <div className="card-content">
          <motion.span
            className="card-tag"
            style={{
              color: accentColor,
              background: `${accentColor}18`,
              borderColor: `${accentColor}40`,
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: d + 0.3, duration: 0.4 }}
          >
            {tag}
          </motion.span>

          <div className="card-header">
            <motion.h3
              className="card-title"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: d + 0.4, duration: 0.5 }}
            >
              {title}
            </motion.h3>

            <motion.span
              className="card-subtitle"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: d + 0.6 }}
            >
              {subtitle}
            </motion.span>
          </div>

          <motion.div
            className="card-divider"
            style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: d + 0.5, duration: 0.5, ease: "easeOut" }}
          />

          <motion.p
            className="card-text"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: d + 0.65, duration: 0.5 }}
          >
            {text}
          </motion.p>

          <motion.button
            className="card-button"
            style={{ color: accentColor }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: d + 0.8 }}
            whileHover={{ x: 4 }}
            onClick={onExplore}
          >
            Explorar
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        <div className="card-scanlines" />
      </motion.div>
    </motion.div>
  );
}
