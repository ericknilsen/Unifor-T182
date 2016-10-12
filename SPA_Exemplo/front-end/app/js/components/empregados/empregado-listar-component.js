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
var empregado_service_1 = require('../.././services/empregado-service');
var router_1 = require('@angular/router');
var EmpregadoListarComponent = (function () {
    function EmpregadoListarComponent(empregadoService) {
        this.empregadoService = empregadoService;
    }
    EmpregadoListarComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    EmpregadoListarComponent.prototype.listar = function () {
        var _this = this;
        this.empregadoService.listar().subscribe(function (data) { return _this.empregados = data; }, function (error) { return _this.error = "Erro ao listar empregados"; });
    };
    EmpregadoListarComponent.prototype.excluir = function (id) {
        var _this = this;
        this.empregadoService.excluir(id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir empregado"; }, function () { return _this.listar(); });
    };
    EmpregadoListarComponent = __decorate([
        core_1.Component({
            selector: 'empregado-listar',
            templateUrl: 'app/views/empregados/listar.html',
            providers: [empregado_service_1.EmpregadoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [empregado_service_1.EmpregadoService])
    ], EmpregadoListarComponent);
    return EmpregadoListarComponent;
}());
exports.EmpregadoListarComponent = EmpregadoListarComponent;
//# sourceMappingURL=empregado-listar-component.js.map