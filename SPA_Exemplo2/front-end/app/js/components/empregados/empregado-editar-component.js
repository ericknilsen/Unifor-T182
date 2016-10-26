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
var estacionamento_service_1 = require('../.././services/estacionamento-service');
var departamento_service_1 = require('../.././services/departamento-service');
var router_1 = require('@angular/router');
var EmpregadoEditarComponent = (function () {
    function EmpregadoEditarComponent(route, router, empregadoService, departamentoService, estacionamentoService, projetoService) {
        this.route = route;
        this.router = router;
        this.empregadoService = empregadoService;
        this.departamentoService = departamentoService;
        this.estacionamentoService = estacionamentoService;
        this.projetoService = projetoService;
    }
    EmpregadoEditarComponent.prototype.ngOnInit = function () {
        this.empregado = new empregado_1.Empregado();
        this.empregado.projetos = new Array();
        this.projetos = new Array();
        this.listarDepartamentos();
        this.listarEstacionamentos();
        this.listarProjetos();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    };
    EmpregadoEditarComponent.prototype.buscar = function (id) {
        var _this = this;
        this.empregadoService.buscarPorId(id).subscribe(function (data) { return _this.empregado = data; }, function (error) { return _this.error = "Erro ao buscar empregado"; }, function () { return _this.carregaDados(); });
    };
    EmpregadoEditarComponent.prototype.atualizar = function () {
        var _this = this;
        var projetosSelecionados = this.projetos.filter(function (x) { return x.selected; });
        this.empregado.projetos = projetosSelecionados;
        this.empregadoService.atualizar(this.empregado).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao editar empregado"; }, function () { return _this.router.navigate(['/empregado-listar']); });
    };
    EmpregadoEditarComponent.prototype.listarDepartamentos = function () {
        var _this = this;
        this.departamentoService.listar().subscribe(function (data) { return _this.departamentos = data; }, function (error) { return _this.error = "Erro ao listar departamento"; });
    };
    EmpregadoEditarComponent.prototype.listarEstacionamentos = function () {
        var _this = this;
        this.estacionamentoService.listar().subscribe(function (data) { return _this.estacionamentos = data; }, function (error) { return _this.error = "Erro ao listar estacionamentos"; });
    };
    EmpregadoEditarComponent.prototype.listarProjetos = function () {
        var _this = this;
        this.projetoService.listar().subscribe(function (data) { return _this.projetos = data; }, function (error) { return _this.error = "Erro ao listar projetos"; });
    };
    EmpregadoEditarComponent.prototype.carregaDados = function () {
        this.selecionaDepartamento();
        this.selecionaEstacionamento();
        this.marcaProjetos();
    };
    EmpregadoEditarComponent.prototype.selecionaDepartamento = function () {
        var _this = this;
        this.departamentos.forEach(function (departamento) {
            if (_this.empregado.departamento.id == departamento.id)
                _this.empregado.departamento = departamento;
        });
    };
    EmpregadoEditarComponent.prototype.selecionaEstacionamento = function () {
        var _this = this;
        this.estacionamentos.forEach(function (estacionamento) {
            if (_this.empregado.estacionamento.id == estacionamento.id)
                _this.empregado.estacionamento = estacionamento;
        });
    };
    EmpregadoEditarComponent.prototype.marcaProjetos = function () {
        var _this = this;
        this.empregado.projetos.forEach(function (projetoEmp) {
            _this.projetos.forEach(function (projeto) {
                if (projetoEmp.id == projeto.id)
                    projeto.selected = true;
            });
        });
    };
    EmpregadoEditarComponent.prototype.checkbox = function (projeto) {
        projeto.selected = (projeto.selected) ? false : true;
    };
    EmpregadoEditarComponent = __decorate([
        core_1.Component({
            selector: 'empregado-editar',
            templateUrl: 'app/views/empregados/editar.html',
            providers: [empregado_service_1.EmpregadoService, projeto_service_1.ProjetoService, departamento_service_1.DepartamentoService, estacionamento_service_1.EstacionamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, empregado_service_1.EmpregadoService, departamento_service_1.DepartamentoService, estacionamento_service_1.EstacionamentoService, projeto_service_1.ProjetoService])
    ], EmpregadoEditarComponent);
    return EmpregadoEditarComponent;
}());
exports.EmpregadoEditarComponent = EmpregadoEditarComponent;
//# sourceMappingURL=empregado-editar-component.js.map