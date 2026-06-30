# Moebius

## Sobre o site
O intuito do site é mostrar um pouco da vida e obra do quadrinista Moebius, também conhecido como Jean Giraud, considerado um dos artistas mais influentes da história dos quadrinhos e da ficção científica.

## Por que o tema?
Devido aos seus desenhos únicos e cheios de detalhes, Moebius se tornou um tema interessante para construir um site visualmente agradável, no qual a própria estética do projeto pudesse dialogar com o estilo do artista.

## Demo
O site está no ar em: [moebius-el1.pages.dev](https://moebius-el1.pages.dev/)

## Tecnologias utilizadas
- [React](https://react.dev/) (v19)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [Motion](https://motion.dev/) — biblioteca usada para as animações e transições do site
- [Testing Library](https://testing-library.com/) (`@testing-library/react`, `jest-dom`, `user-event`) — testes de componentes
- Web Vitals — monitoramento de métricas de performance

## Funcionalidades
- **Seção inicial (hero)** com chamada de destaque ("O homem que desenhou o futuro") e botão para navegar ao conteúdo do site
- **Seção biográfica**, contando a trajetória de Jean Giraud e sua transformação no pseudônimo Moebius
- **Galeria de obras**, com cards apresentando trabalhos como *Arzach*, *O Incal* e *Métal Hurlant*, cada um com imagem, ano de publicação, descrição e link para explorar mais
- **Animações de transição e scroll**, implementadas com a biblioteca Motion, dando fluidez à navegação entre as seções

## Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd moebius
npm install
```

Para rodar em modo de desenvolvimento:

```bash
npm start
```

O site abrirá em `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
```

Para rodar os testes:

```bash
npm test
```

## Autor
Feito por Vinicius Rizzato, como projeto de portfólio.
