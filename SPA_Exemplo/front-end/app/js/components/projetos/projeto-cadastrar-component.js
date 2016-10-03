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
let ProjetoCadastrarComponent = class ProjetoCadastrarComponent {
    constructor(router, projetoService) {
        this.router = router;
        this.projetoService = projetoService;
    }
    ngOnInit() {
        this.projeto = new projeto_1.Projeto();
    }
    cadastrar() {
        this.projetoService.cadastrar(this.projeto).subscribe(data => this.mensagem = data, error => this.error = "Erro ao cadastrar projeto", () => this.router.navigate(['/projeto-listar']));
    }
};
ProjetoCadastrarComponent = __decorate([
    core_1.Component({
        selector: 'projeto-cadastrar',
        templateUrl: 'app/views/projetos/cadastrar.html',
        providers: [projeto_service_1.ProjetoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.Router, projeto_service_1.ProjetoService])
], ProjetoCadastrarComponent);
exports.ProjetoCadastrarComponent = ProjetoCadastrarComponent;
//# sourceMappingURL=projeto-cadastrar-component.js.map