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
const projeto_1 = require('../.././models/projeto');
const projeto_service_1 = require('../.././services/projeto-service');
const router_1 = require('@angular/router');
let ProjetoVisualizarComponent = class ProjetoVisualizarComponent {
    constructor(route, projetoService) {
        this.route = route;
        this.projetoService = projetoService;
    }
    buscar(id) {
        this.projetoService.buscarPorId(id).subscribe(data => this.projeto = data, error => this.error = "Erro ao buscar projeto");
    }
    ngOnInit() {
        this.projeto = new projeto_1.Projeto();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }
};
ProjetoVisualizarComponent = __decorate([
    core_1.Component({
        selector: 'projeto-visualizar',
        templateUrl: 'app/views/projetos/visualizar.html',
        providers: [projeto_service_1.ProjetoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, projeto_service_1.ProjetoService])
], ProjetoVisualizarComponent);
exports.ProjetoVisualizarComponent = ProjetoVisualizarComponent;
//# sourceMappingURL=projeto-visualizar-component.js.map