const express = require("express");
const app = express();
const cors = require("cors");

const port = 8000;

const rotaLivro = require('./rotas/livro');
const rotaFavorito = require('./rotas/favorito')

app.use(cors({origin: "*"}));

app.use(express.json())

app.use('/livros', rotaLivro);

app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});