function aluno(nome, notas, qtdFaltas) {
    this.nome = nome;
    this.nota = notas;
    this.qtdfaltas = qtdFaltas;


    this.calcularmedia = function () {
        let somanotas = 0;
        for (let i = 0; i < this.nota.length; i++) {
            somanotas += notas[i];
        }
        media = somanotas / this.nota.length;
        return media
    }

    this.faltas = function () {
        this.qtdfaltas++;
    }
}

let alunos = [];

const aluno1 = new aluno("roberto", [10, 9, 10], 6);
const aluno2 = new aluno("rafael", [7, 7, 7], 0);
const aluno3 = new aluno("joão", [5, 3, 8], 3);
const aluno4 = new aluno("zé", [7, 9, 10], 1);

alunos.push(aluno1, aluno2, aluno3, aluno4)

const curso = {
    nometurma: "CTD",
    notaaprov: 7,
    maxfalta: 5,
    listaalunos: alunos,
    Arrayboleano: lista = [],

    addestudante: function (nome, notas, qtdFaltas) {
        this.listaalunos.push(new aluno(nome, notas, qtdFaltas))
    },


    resultado: function (aluno) {
        if (aluno.calcularmedia() >= curso.notaaprov && aluno.qtdfaltas < curso.maxfalta) {
            return `${aluno.nome} foi aprovado`
        }
        else if (aluno.calcularmedia() >= curso.notaaprov * 1.1 && aluno.qtdFaltas == curso.maxfalta) {
            return `${aluno.nome} foi aprovado`
        }
        else {
            return `${aluno.nome} foi reprovado`
        }
    },

    resultadofinal: function () {
        for (let i = 0; i < this.listaalunos.length; i++) {
            this.listaalunos[i]
            if (this.listaalunos[i].calcularmedia() >= curso.notaAprovacao && this.listaalunos[i].qtdfaltas < curso.maxfalta) {
                this.Arrayboleano.push(true)
            }
            else if (this.listaalunos[i].calcularmedia() >= curso.notaAprovacao * 1.1 && this.listaalunos[i].qtdfaltas < curso.numeroFaltas) {
                this.Arrayboleano.push(true)

            }
            else {
                this.Arrayboleano.push(false)

            }

        }
    }
}

//teste

console.log(curso.resultado(aluno1));