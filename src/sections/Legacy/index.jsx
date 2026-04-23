import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";

const influences = [
  { name: "Alien — 1979",           fill: 92 },
  { name: "Star Wars",              fill: 78 },
  { name: "Blade Runner — 1982",    fill: 85 },
  { name: "Tron — 1982",            fill: 70 },
  { name: "O Quinto Elemento",      fill: 74 },
  { name: "Nausicaä — Miyazaki",    fill: 88 },
  { name: "Akira — Otomo",          fill: 81 },
];

function InfluenceItem({ name, fill, index, isInView }) {
  return (
    <motion.div
      className="legacy-influence-item"
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{ x: -4 }}
    >
      <span className="legacy-influence-index">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="legacy-influence-bar">
        <motion.div
          className="legacy-influence-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${fill}%` } : {}}
          transition={{ delay: 0.8 + index * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <span className="legacy-influence-name">{name}</span>
    </motion.div>
  );
}

export default function Legacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 60, damping: 20 });

  function handleMouseMove(e) {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  }

  return (
    <section className="legacy" ref={ref} onMouseMove={handleMouseMove}>

      <div className="legacy-grid" />
      <div className="legacy-vignette" />

      {["1938", "1975", "1981", "2012"].map((year, i) => (
        <motion.span
          key={year}
          className="legacy-year"
          style={{
            fontSize: `${14 + i * 4}rem`,
            top: `${[10, 55, 20, 60][i]}%`,
            left: `${[5, 60, 75, 20][i]}%`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.15, duration: 1.2 }}
        >
          {year}
        </motion.span>
      ))}

      <motion.div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,200,51,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <motion.div 
      initial={{ opacity: 0, translateY: -20 }} 
      animate={isInView ? { opacity: 1, translateY: 0 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="legacy-inner">

        <div className="legacy-left">

          <motion.h2
            className="legacy-title"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            A assinatura <em>invisível</em><br />que está em tudo
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              height: 1,
              background: "linear-gradient(to right, #efc833, transparent)",
              transformOrigin: "left",
              marginBottom: "2rem",
              width: "60%",
            }}
          />

          <motion.p
            className="legacy-body"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.2 }}
          >
            A influência de Moebius no cinema e na cultura visual do século XX
            é difícil de mensurar — justamente porque se tornou o padrão.
            Ridley Scott o contratou para desenhar os trajes dos astronautas
            de Alien (1979) e declarou que sua obra era a referência estética
            definitiva da ficção científica. Os desertos de Tatooine em Star Wars
            carregam a atmosfera árida e contemplativa de suas paisagens.
            Blade Runner, Tron, O Quinto Elemento e até animações como Nausicaä
            de Miyazaki e Akira de Otomo bebem diretamente de seu traço.
          </motion.p>

          <motion.div
            className="legacy-quote"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            <p>
              Você vê a influência dele em todo lugar. Ela perpassa tanta coisa
              que você não consegue escapar dela.
            </p>
            <cite>— Ridley Scott, diretor de Alien e Blade Runner</cite>
          </motion.div>
        </div>

        <div className="legacy-right">
          <motion.span
            className="legacy-influences-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.2 }}
          >
            Obras influenciadas
          </motion.span>

          {influences.map((item, i) => (
            <InfluenceItem
              key={item.name}
              name={item.name}
              fill={item.fill}
              index={i}
              isInView={isInView}
            />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              marginTop: "0.5rem",
              paddingTop: "1.2rem",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}>
              Jean Giraud
            </span>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--primary-color)",
            }}>
              1938 — 2012
            </span>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}