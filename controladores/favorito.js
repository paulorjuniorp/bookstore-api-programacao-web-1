const { getTodosFavoritos, getFavoritoPorId, insereFavorito, removeFavorito } = require("../servicos/favoritos");

function getFavoritos(req, res) {
    try{
        const favoritos = getTodosFavoritos();
        res.send(favoritos);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}

function getFavorito(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
            const favorito = getFavoritoPorId(id);
            res.send(favorito);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            insereFavorito(id)
            res.status(201)
            res.send("favorito inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}


function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            removeFavorito(id);
            res.status(200);
            res.send("Favorito removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

module.exports = {
    getFavoritos,
    getFavorito,
    postFavorito,
    deleteFavorito
}