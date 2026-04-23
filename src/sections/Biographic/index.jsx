import MoebiusImage2 from "../../images/moebius-3.jpeg";
import  { motion } from "motion/react"

const Biographic = () => {
  return (
    <div className="biographic">
      <motion.div
        initial={{ scale: 1.1}}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="biographic__image-side">
        <img src={MoebiusImage2} alt="Moebius" />
      </motion.div>

      <div className="biographic__content">
        <h2>Jean Giraud, o visionário de dois nomes</h2>
        <p>
          Nascido em 1938 nos arredores de Paris, Jean Giraud começou sua
          trajetória aos 18 anos desenhando faroeste na revista Far West. Mas
          foi sob o pseudônimo Moebius — nome inspirado na faixa matemática
          sem começo nem fim — que ele encontrou sua verdadeira dimensão.
          Inquieto por natureza, mudava de estilo sem aviso, experimentava
          traços, misturava o surrealismo com o modernismo, a ficção científica
          com a contracultura. Ao longo de cinco décadas, produziu mais de 30
          revistas em quadrinhos e deixou uma marca impossível de apagar na arte
          sequencial mundial. Morreu em março de 2012, aos 73 anos, sendo até
          hoje reverenciado como um dos maiores artistas da história dos
          quadrinhos.
        </p>
      </div>
    </div>
  );
};

export default Biographic;