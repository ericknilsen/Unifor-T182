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
const estacionamento_service_1 = require('../.././services/estacionamento-service');
const router_1 = require('@angular/router');
let EstacionamentoListarComponent = class EstacionamentoListarComponent {
    constructor(estacionamentoService) {
        this.estacionamentoService = estacionamentoService;
    }
    ngOnInit() {
        this.listar();
    }
    listar() {
        this.estacionamentoService.listar().subscribe(data => this.estacionamentos = data, error => this.error = "Erro ao listar estacionamentos");
    }
    excluir(id) {
        this.estacionamentoService.excluir(id).subscribe(data => this.mensagem = data, error => this.error = "Erro ao excluir estacionamento", () => this.listar());
    }
};
EstacionamentoListarComponent = __decorate([
    core_1.Component({
        selector: 'estacionamento-listar',
        templateUrl: 'app/views/estacionamentos/listar.html',
        providers: [estacionamento_service_1.EstacionamentoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [estacionamento_service_1.EstacionamentoService])
], EstacionamentoListarComponent);
exports.EstacionamentoListarComponent = EstacionamentoListarComponent;
//# sourceMappingURL=estacionamento-listar-component.js.map