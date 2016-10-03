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
const empregado_1 = require('../.././models/empregado');
const empregado_service_1 = require('../.././services/empregado-service');
const projeto_service_1 = require('../.././services/projeto-service');
const departamento_service_1 = require('../.././services/departamento-service');
const estacionamento_service_1 = require('../.././services/estacionamento-service');
const router_1 = require('@angular/router');
let EmpregadoCadastrarComponent = class EmpregadoCadastrarComponent {
    constructor(router, empregadoService, departamentoService, projetoService, estacionamentoService) {
        this.router = router;
        this.empregadoService = empregadoService;
        this.departamentoService = departamentoService;
        this.projetoService = projetoService;
        this.estacionamentoService = estacionamentoService;
    }
    ngOnInit() {
        this.empregado = new empregado_1.Empregado();
        this.listarDepartamentos();
        this.listarProjetos();
        this.listarEstacionamentos();
    }
    cadastrar() {
        let projetosSelecionados = this.projetos.filter((x) => x.selected);
        this.empregado.projetos = projetosSelecionados;
        this.empregadoService.cadastrar(this.empregado).subscribe(data => this.mensagem = data, error => this.error = "Erro ao cadastrar projeto", () => this.router.navigate(['/empregado-listar']));
    }
    listarDepartamentos() {
        this.departamentoService.listar().subscribe(data => this.departamentos = data, error => this.error = "Erro ao listar departamento");
    }
    listarProjetos() {
        this.projetoService.listar().subscribe(data => this.projetos = data, error => this.error = "Erro ao listar projetos");
    }
    listarEstacionamentos() {
        this.estacionamentoService.listar().subscribe(data => this.estacionamentos = data, error => this.error = "Erro ao listar projetos");
    }
    checkbox(projeto) {
        projeto.selected = (projeto.selected) ? false : true;
    }
};
EmpregadoCadastrarComponent = __decorate([
    core_1.Component({
        selector: 'empregado-cadastrar',
        templateUrl: 'app/views/empregados/cadastrar.html',
        providers: [empregado_service_1.EmpregadoService, projeto_service_1.ProjetoService, departamento_service_1.DepartamentoService, estacionamento_service_1.EstacionamentoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.Router, empregado_service_1.EmpregadoService, departamento_service_1.DepartamentoService, projeto_service_1.ProjetoService, estacionamento_service_1.EstacionamentoService])
], EmpregadoCadastrarComponent);
exports.EmpregadoCadastrarComponent = EmpregadoCadastrarComponent;
//# sourceMappingURL=empregado-cadastrar-component.js.map