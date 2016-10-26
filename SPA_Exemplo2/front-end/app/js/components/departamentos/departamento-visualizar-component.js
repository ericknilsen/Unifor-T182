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
var departamento_1 = require('../.././models/departamento');
var departamento_service_1 = require('../.././services/departamento-service');
var router_1 = require('@angular/router');
var DepartamentoVisualizarComponent = (function () {
    function DepartamentoVisualizarComponent(route, departamentoService) {
        this.route = route;
        this.departamentoService = departamentoService;
    }
    DepartamentoVisualizarComponent.prototype.buscar = function (id) {
        var _this = this;
        this.departamentoService.buscarPorId(id).subscribe(function (data) { return _this.departamento = data; }, function (error) { return _this.error = "Erro ao buscar departamento"; });
    };
    DepartamentoVisualizarComponent.prototype.ngOnInit = function () {
        this.departamento = new departamento_1.Departamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    };
    DepartamentoVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'departamento-visualizar',
            templateUrl: 'app/views/departamentos/visualizar.html',
            providers: [departamento_service_1.DepartamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, departamento_service_1.DepartamentoService])
    ], DepartamentoVisualizarComponent);
    return DepartamentoVisualizarComponent;
}());
exports.DepartamentoVisualizarComponent = DepartamentoVisualizarComponent;
//# sourceMappingURL=departamento-visualizar-component.js.map