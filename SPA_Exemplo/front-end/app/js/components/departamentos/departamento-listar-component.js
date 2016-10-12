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
var departamento_service_1 = require('../.././services/departamento-service');
var router_1 = require('@angular/router');
var DepartamentoListarComponent = (function () {
    function DepartamentoListarComponent(departamentoService) {
        this.departamentoService = departamentoService;
    }
    DepartamentoListarComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    DepartamentoListarComponent.prototype.listar = function () {
        var _this = this;
        this.departamentoService.listar().subscribe(function (data) { return _this.departamentos = data; }, function (error) { return _this.error = "Erro ao listar departamentos"; });
    };
    DepartamentoListarComponent.prototype.excluir = function (id) {
        var _this = this;
        this.departamentoService.excluir(id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir departamento"; }, function () { return _this.listar(); });
    };
    DepartamentoListarComponent = __decorate([
        core_1.Component({
            selector: 'departamento-listar',
            templateUrl: 'app/views/departamentos/listar.html',
            providers: [departamento_service_1.DepartamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [departamento_service_1.DepartamentoService])
    ], DepartamentoListarComponent);
    return DepartamentoListarComponent;
}());
exports.DepartamentoListarComponent = DepartamentoListarComponent;
//# sourceMappingURL=departamento-listar-component.js.map