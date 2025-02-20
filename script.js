const steveRogers = {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo americano",
        armaSecundaria: "",
        velocidade: 80,
        forca: 75,
        resistencia: 80,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
    
const tonyStark = {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura Mark LXXXV",
        armaSecundaria: "Canhões de pulso",
        velocidade: 85,
        forca: 70,
        resistencia: 75,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
const thorOdinson = {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Mjolnir",
        armaSecundaria: "Stormbreaker",
        velocidade: 90,
        forca: 90,
        resistencia: 95,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
const bruceBanner = {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força bruta",
        armaSecundaria: "",
        velocidade: 50,
        forca: 100,
        resistencia: 90,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
const natashaRomanoff = {
        nome: "Natasha Romanoff",
        codinome: "Viúva Negra",
        armaPrincipal: "Pistolas duplas",
        armaSecundaria: "Bastões elétricos",
        velocidade: 65,
        forca: 60,
        resistencia: 70,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
const clintBarton = {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "Arco e flechas",
        armaSecundaria: "Facas de arremesso",
        velocidade: 60,
        forca: 50,
        resistencia: 65,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
const thanos = {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "Força bruta",
        velocidade: 70,
        forca: 95,
        resistencia: 100,
        descricao: function() {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }

const personagens = [steveRogers, tonyStark, clintBarton, natashaRomanoff, bruceBanner, thorOdinson, thanos];

personagens.forEach(personagem => {
    console.log(personagem.descricao());
    console.log('------------------');
});

function encontrarMelhor(atributo) {
    let melhor = personagens[0];
    for (let i = 1; i < personagens.length; i++) {
        if (personagens[i][atributo] > melhor[atributo]) {
            melhor = personagens[i];
        }
    }
    return melhor;
}

console.log(`Batalha de Personagens`)
console.log(`Maior força: ${encontrarMelhor("forca").codinome}`);
console.log(`Maior velocidade: ${encontrarMelhor("velocidade").codinome}`);
console.log(`Maior resistência: ${encontrarMelhor("resistencia").codinome}`);

function encontrarMaisForte() {
    let maisForte = personagens[0];
    for (let i = 1; i < personagens.length; i++) {
        let poderTotal = personagens[i].forca + personagens[i].velocidade + personagens[i].resistencia;
        let poderMaisForte = maisForte.forca + maisForte.velocidade + maisForte.resistencia;
        if (poderTotal > poderMaisForte) {
            maisForte = personagens[i];
        }
    }
    return maisForte;
}

const vencedor = encontrarMaisForte();

function calcularPontos(personagem) {
    return personagem.forca + personagem.velocidade + personagem.resistencia;
}

console.log(`O personagem vencedor é: ${encontrarMaisForte().codinome}, com ${calcularPontos(vencedor)} pontos.`);

