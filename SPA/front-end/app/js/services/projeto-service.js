"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/Rx');
let ProjetoService = class ProjetoService {
    constructor(http) {
        this.http = http;
        this.urlServico = "http://localhost:8080/ExemploRest/rest/projetos";
    }
    listar() {
        return this.http.get(this.urlServico).map(res => res.json());
    }
    cadastrar(projeto) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        let body = JSON.stringify(projeto);
        return this.http.post(this.urlServico, body, options).map(res => res.text());
    }
    atualizar(projeto) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        let body = JSON.stringify(projeto);
        return this.http.put(this.urlServico, body, options).map(res => res.text());
    }
    excluir(id) {
        let url = this.urlServico + '/' + id;
        return this.http.delete(url).map(res => res.text());
    }
    buscarPorId(id) {
        return this.http.get(this.urlServico + '?id=' + id).map(res => res.json());
        ;
    }
};
ProjetoService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProjetoService);
exports.ProjetoService = ProjetoService;
//# sourceMappingURL=projeto-service.js.map