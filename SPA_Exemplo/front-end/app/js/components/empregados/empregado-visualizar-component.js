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
var departamento_1 = require('../.././models/departamento');
var estacionamento_1 = require('../.././models/estacionamento');
var empregado_service_1 = require('../.././services/empregado-service');
var router_1 = require('@angular/router');
var EmpregadoVisualizarComponent = (function () {
    function EmpregadoVisualizarComponent(route, empregadoService) {
        this.route = route;
        this.empregadoService = empregadoService;
    }
    EmpregadoVisualizarComponent.prototype.buscar = function (id) {
        var _this = this;
        this.empregadoService.buscarPorId(id).subscribe(function (data) { return _this.empregado = data; }, function (error) { return _this.error = "Erro ao buscar empregado"; });
    };
    EmpregadoVisualizarComponent.prototype.ngOnInit = function () {
        this.empregado = new empregado_1.Empregado();
        this.empregado.departamento = new departamento_1.Departamento();
        this.empregado.estacionamento = new estacionamento_1.Estacionamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
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
    return EmpregadoVisualizarComponent;
}());
exports.EmpregadoVisualizarComponent = EmpregadoVisualizarComponent;
//# sourceMappingURL=empregado-visualizar-component.js.map