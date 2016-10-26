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
var core_1 = require('@angular/core');
var empregado_1 = require('../.././models/empregado');
var empregado_service_1 = require('../.././services/empregado-service');
var projeto_service_1 = require('../.././services/projeto-service');
var departamento_service_1 = require('../.././services/departamento-service');
var estacionamento_service_1 = require('../.././services/estacionamento-service');
var router_1 = require('@angular/router');
var EmpregadoCadastrarComponent = (function () {
    function EmpregadoCadastrarComponent(router, empregadoService, departamentoService, projetoService, estacionamentoService) {
        this.router = router;
        this.empregadoService = empregadoService;
        this.departamentoService = departamentoService;
        this.projetoService = projetoService;
        this.estacionamentoService = estacionamentoService;
    }
    EmpregadoCadastrarComponent.prototype.ngOnInit = function () {
        this.empregado = new empregado_1.Empregado();
        this.listarDepartamentos();
        this.listarProjetos();
        this.listarEstacionamentos();
    };
    EmpregadoCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        var projetosSelecionados = this.projetos.filter(function (x) { return x.selected; });
        this.empregado.projetos = projetosSelecionados;
        this.empregadoService.cadastrar(this.empregado).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao cadastrar projeto"; }, function () { return _this.router.navigate(['/empregado-listar']); });
    };
    EmpregadoCadastrarComponent.prototype.listarDepartamentos = function () {
        var _this = this;
        this.departamentoService.listar().subscribe(function (data) { return _this.departamentos = data; }, function (error) { return _this.error = "Erro ao listar departamento"; });
    };
    EmpregadoCadastrarComponent.prototype.listarProjetos = function () {
        var _this = this;
        this.projetoService.listar().subscribe(function (data) { return _this.projetos = data; }, function (error) { return _this.error = "Erro ao listar projetos"; });
    };
    EmpregadoCadastrarComponent.prototype.listarEstacionamentos = function () {
        var _this = this;
        this.estacionamentoService.listar().subscribe(function (data) { return _this.estacionamentos = data; }, function (error) { return _this.error = "Erro ao listar projetos"; });
    };
    EmpregadoCadastrarComponent.prototype.checkbox = function (projeto) {
        projeto.selected = (projeto.selected) ? false : true;
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
    return EmpregadoCadastrarComponent;
}());
exports.EmpregadoCadastrarComponent = EmpregadoCadastrarComponent;
//# sourceMappingURL=empregado-cadastrar-component.js.map