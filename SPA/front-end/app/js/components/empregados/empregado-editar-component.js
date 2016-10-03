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
const estacionamento_service_1 = require('../.././services/estacionamento-service');
const departamento_service_1 = require('../.././services/departamento-service');
const router_1 = require('@angular/router');
let EmpregadoEditarComponent = class EmpregadoEditarComponent {
    constructor(route, router, empregadoService, departamentoService, estacionamentoService, projetoService) {
        this.route = route;
        this.router = router;
        this.empregadoService = empregadoService;
        this.departamentoService = departamentoService;
        this.estacionamentoService = estacionamentoService;
        this.projetoService = projetoService;
    }
    ngOnInit() {
        this.empregado = new empregado_1.Empregado();
        this.empregado.projetos = new Array();
        this.projetos = new Array();
        this.listarDepartamentos();
        this.listarEstacionamentos();
        this.listarProjetos();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }
    buscar(id) {
        this.empregadoService.buscarPorId(id).subscribe(data => this.empregado = data, error => this.error = "Erro ao buscar empregado", () => this.carregaDados());
    }
    atualizar() {
        let projetosSelecionados = this.projetos.filter((x) => x.selected);
        this.empregado.projetos = projetosSelecionados;
        this.empregadoService.atualizar(this.empregado).subscribe(data => this.mensagem = data, error => this.error = "Erro ao editar empregado", () => this.router.navigate(['/empregado-listar']));
    }
    listarDepartamentos() {
        this.departamentoService.listar().subscribe(data => this.departamentos = data, error => this.error = "Erro ao listar departamento");
    }
    listarEstacionamentos() {
        this.estacionamentoService.listar().subscribe(data => this.estacionamentos = data, error => this.error = "Erro ao listar estacionamentos");
    }
    listarProjetos() {
        this.projetoService.listar().subscribe(data => this.projetos = data, error => this.error = "Erro ao listar projetos");
    }
    carregaDados() {
        this.selecionaDepartamento();
        this.selecionaEstacionamento();
        this.marcaProjetos();
    }
    selecionaDepartamento() {
        this.departamentos.forEach(departamento => {
            if (this.empregado.departamento.id == departamento.id)
                this.empregado.departamento = departamento;
        });
    }
    selecionaEstacionamento() {
        this.estacionamentos.forEach(estacionamento => {
            if (this.empregado.estacionamento.id == estacionamento.id)
                this.empregado.estacionamento = estacionamento;
        });
    }
    marcaProjetos() {
        this.empregado.projetos.forEach(projetoEmp => {
            this.projetos.forEach(projeto => {
                if (projetoEmp.id == projeto.id)
                    projeto.selected = true;
            });
        });
    }
    checkbox(projeto) {
        projeto.selected = (projeto.selected) ? false : true;
    }
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
exports.EmpregadoEditarComponent = EmpregadoEditarComponent;
//# sourceMappingURL=empregado-editar-component.js.map