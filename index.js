"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmaClasse = void 0;
var UmaClasse = /** @class */ (function () {
    function UmaClasse(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    UmaClasse.prototype.getNome = function () {
        return this.nome;
    };
    UmaClasse.prototype.getIdade = function () {
        return this.idade;
    };
    UmaClasse.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    UmaClasse.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return UmaClasse;
}());
exports.UmaClasse = UmaClasse;
