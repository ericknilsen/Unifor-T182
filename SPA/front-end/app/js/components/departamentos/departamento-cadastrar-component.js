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
const departamento_1 = require('../.././models/departamento');
const departamento_service_1 = require('../.././services/departamento-service');
const router_1 = require('@angular/router');
let DepartamentoCadastrarComponent = class DepartamentoCadastrarComponent {
    constructor(router, departamentoService) {
        this.router = router;
        this.departamentoService = departamentoService;
    }
    ngOnInit() {
        this.departamento = new departamento_1.Departamento();
    }
    cadastrar() {
        this.departamentoService.cadastrar(this.departamento).subscribe(data => this.mensagem = data, error => this.error = "Erro ao cadastrar departamento", () => this.router.navigate(['/departamento-listar']));
    }
};
DepartamentoCadastrarComponent = __decorate([
    core_1.Component({
        selector: 'departamento-cadastrar',
        templateUrl: 'app/views/departamentos/cadastrar.html',
        providers: [departamento_service_1.DepartamentoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.Router, departamento_service_1.DepartamentoService])
], DepartamentoCadastrarComponent);
exports.DepartamentoCadastrarComponent = DepartamentoCadastrarComponent;
//# sourceMappingURL=departamento-cadastrar-component.js.map