class Impostor {
    constructor(nome, id, equipe) {
        this.id = this.generate()
        this.nome = nome,
        this.id = id,
        this.equipe = equipe
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}

export default Impostor