class Jogador {
    constructor(nome, id, impostor, desenvolvedor){
        this.id = this.generate()
        this.id = id,
        this.nome = nome,
        this.impostor = impostor,
        this.desenvolvedor = desenvolvedor
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}

export default Jogador