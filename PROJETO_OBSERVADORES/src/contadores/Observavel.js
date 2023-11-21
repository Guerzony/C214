"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observavel = /** @class */ (function () {
    function Observavel() {
        this.frase = "";
        this.observadores = [];
    }
    Observavel.prototype.adicionarObservador = function (obs) {
        this.observadores.push(obs);
        console.log('Observador adicionado!');
    };
    Observavel.prototype.removerObservador = function (obs) {
        var index = this.observadores.indexOf(obs);
        if (index !== -1) {
            this.observadores.splice(index, 1);
            console.log('Observador removido!');
        }
        else {
            console.log('Observador não encontrado.');
        }
    };
    Observavel.prototype.notificarObservadores = function () {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var observador = _a[_i];
            observador.update(this);
        }
        console.log('Observadores notificados!');
    };
    Observavel.prototype.obterNumeroDePalavras = function () {
        var palavras = this.frase.split(" ");
        return palavras.length;
    };
    Observavel.prototype.obterNumeroPares = function () {
        return this.frase.split(" ").filter(function (palavra) { return palavra.length % 2 === 0; }).length;
    };
    Observavel.prototype.obterNumeroPalavrasMaiusculas = function () {
        return this.frase.split(" ").filter(function (palavra) { return palavra[0] === palavra[0].toUpperCase(); }).length;
    };
    Observavel.prototype.getFrase = function () {
        return this.frase;
    };
    Observavel.prototype.setFrase = function (frase) {
        this.frase = frase;
    };
    Observavel.prototype.getObservadores = function () {
        return this.observadores;
    };
    Observavel.prototype.setObservadores = function (obs) {
        this.observadores = obs;
    };
    return Observavel;
}());
exports.default = Observavel;
