'use client';
import  { motion } from "motion/react"
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";

const Hero = () => {

    const [pos, setPos] = useState({ x: 50, y: 20 });

    const handleMouseMove = (event) => {

        const x = (event.clientX / window.innerWidth) * 75;
        const y = (event.clientY / window.innerHeight) * 25;   

        setPos({ x: x, y: y });
    }


  return (
    <motion.div
    className="hero"
    onMouseMove={handleMouseMove}
    style={{
        backgroundPosition: `${pos.x}% ${pos.y + 15}%`
    }}
    >
        <div className="hero-border">
            <div className="hero-content">
                <h1>Moebius</h1>
                <p>O homem que desenhou o futuro</p>
                <PrimaryButton onClick={() => console.log("Button clicked!")}>Conheça</PrimaryButton>
            </div>
        </div>
    </motion.div>
    );
}

export default Hero;