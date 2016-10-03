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
const departamento_1 = require('../.././models/departamento');
const estacionamento_1 = require('../.././models/estacionamento');
const empregado_service_1 = require('../.././services/empregado-service');
const router_1 = require('@angular/router');
let EmpregadoVisualizarComponent = class EmpregadoVisualizarComponent {
    constructor(route, empregadoService) {
        this.route = route;
        this.empregadoService = empregadoService;
    }
    buscar(id) {
        this.empregadoService.buscarPorId(id).subscribe(data => this.empregado = data, error => this.error = "Erro ao buscar empregado");
    }
    ngOnInit() {
        this.empregado = new empregado_1.Empregado();
        this.empregado.departamento = new departamento_1.Departamento();
        this.empregado.estacionamento = new estacionamento_1.Estacionamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }
};
EmpregadoVisualizarComponent = __decorate([
    core_1.Component({
        selector: 'empregado-visualizar',
        templateUrl: 'app/views/empregados/visualizar.html',
        providers: [empregado_service_1.EmpregadoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, empregado_service_1.EmpregadoService])
], EmpregadoVisualizarComponent);
exports.EmpregadoVisualizarComponent = EmpregadoVisualizarComponent;
//# sourceMappingURL=empregado-visualizar-component.js.map