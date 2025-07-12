const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro } = require("../servicos/livros");

function getLivros(req, res) {
    try{
        const livros = getTodosLivros();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
            const livro = getLivroPorId(id);
            res.send(livro);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

function patchLivro(req, res) {
    try {
        if(id && Number(id)) {
            const id = req.params.id
            const body = req.body
            modificaLivro(body, id)
            res.status(201)
            res.send("Livro editado com sucesso!")
        }
    } catch(error) {
        res.status(500)
        res.send("Id inválido")
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            removeLivro(id);
            res.status(200);
            res.send("Livro removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}