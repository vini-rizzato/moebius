'use client'
import SideCardWindow from "../../components/SideCardWIndow";
import CardComp from "../../components/Card";
import { useState } from "react";

import img1 from "../../images/moebius-card-1.jpg";
import img2 from "../../images/moebius-card-2.webp";
import img3 from "../../images/moebius-card-3.webp";

const cards = [
    {
        title: "Arzach",
        extendedTitle: "Arzach — O voo além das palavras",
        subtitle: "1975",
        tag: "Obra",
        accentColor: "#efc833",
        text: "Uma história sem palavras. Um guerreiro, uma criatura alada, paisagens alienígenas. Moebius provou que a imagem sozinha pode narrar com poesia.",
        extendedText: "Lançado em 1975 na revista Métal Hurlant, Arzach foi uma ruptura radical: uma história em quadrinhos completamente sem texto, sem diálogos, sem legendas. Um guerreiro solitário atravessa paisagens alienígenas montado em uma criatura alada semelhante a um pterodáctilo. Moebius provou que a imagem sozinha pode narrar com profundidade e poesia. A obra se tornou um marco da narrativa gráfica silenciosa e influenciou gerações de quadrinistas ao redor do mundo. Arzach é uma experiência visual única, onde cada quadro é uma pintura que convida o leitor a mergulhar em um universo de mistério e beleza, redefinindo o que os quadrinhos podem ser.",
        img: img1,
    },
    {
        title: "O Incal",
        extendedTitle: "O Incal — A obra-prima definitiva",
        subtitle: "1981–1988",
        tag: "Obra-prima",
        accentColor: "#e05a2b",
        text: "A saga de John Difool, um detetive em um futuro distópico, mistura ficção científica, misticismo e crítica social em um épico visual inesquecível.",
        extendedText: "Criado em parceria com o diretor chileno Alejandro Jodorowsky entre 1981 e 1989, O Incal acompanha John Difool, um detetive medíocre que tropeça num artefato cósmico de poder imensurável. A série reuniu o roteiro filosófico e caótico de Jodorowsky com o traço incomparável de Moebius, resultando numa obra que ganhou os prêmios Harvey e Eisner. Considerada por muitos críticos a maior história em quadrinhos de ficção científica já produzida, O Incal segue sendo referência absoluta do gênero.",
        img: img2,
    },
    {
        title: "Mètal Hurlant",
        extendedTitle: "Mètal Hurlant — A revolução dos quadrinhos",
        subtitle: "1975–1987",
        tag: "Série",
        accentColor: "#3b9ede",
        text: "Revista de quadrinhos que Moebius cofundou, revolucionando a indústria com histórias inovadoras e arte de tirar o fôlego, influenciando gerações de artistas.",
        extendedText: "Lançada em 1975 por Moebius, Jean-Pierre Dionnet, Philippe Druillet e Bernard Farkas, a revista Mètal Hurlant (conhecida como Heavy Metal nos EUA) foi um marco na história dos quadrinhos. Com uma abordagem ousada e inovadora, a revista apresentou histórias de ficção científica, fantasia e horror que desafiavam as convenções da época. O traço único de Moebius e a liberdade criativa proporcionada pela revista permitiram que artistas explorassem temas complexos e visuais impressionantes, influenciando gerações de quadrinistas e cineastas ao redor do mundo.",
        img: img3,
    },
];

const Cards = () => {

    const [selected, setSelected] = useState(null);

    return (
        <div className="cards">

            {cards.map((card, i) => (
                <CardComp key={i} index={i} {...card} onExplore={() => setSelected(card)} />
            ))}

            <SideCardWindow
                isOpen={selected !== null}
                onClose={() => setSelected(null)}
                title={selected?.extendedTitle}
                subtitle={selected?.subtitle}
                text={selected?.extendedText}
                image={selected?.img}
                accentColor={selected?.accentColor}
                tag={selected?.tag}
            />
        </div>
    );
};

export default Cards;