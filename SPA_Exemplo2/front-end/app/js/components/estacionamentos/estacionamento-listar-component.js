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
var estacionamento_service_1 = require('../.././services/estacionamento-service');
var router_1 = require('@angular/router');
var EstacionamentoListarComponent = (function () {
    function EstacionamentoListarComponent(estacionamentoService) {
        this.estacionamentoService = estacionamentoService;
    }
    EstacionamentoListarComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    EstacionamentoListarComponent.prototype.listar = function () {
        var _this = this;
        this.estacionamentoService.listar().subscribe(function (data) { return _this.estacionamentos = data; }, function (error) { return _this.error = "Erro ao listar estacionamentos"; });
    };
    EstacionamentoListarComponent.prototype.excluir = function (id) {
        var _this = this;
        this.estacionamentoService.excluir(id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir estacionamento"; }, function () { return _this.listar(); });
    };
    EstacionamentoListarComponent = __decorate([
        core_1.Component({
            selector: 'estacionamento-listar',
            templateUrl: 'app/views/estacionamentos/listar.html',
            providers: [estacionamento_service_1.EstacionamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [estacionamento_service_1.EstacionamentoService])
    ], EstacionamentoListarComponent);
    return EstacionamentoListarComponent;
}());
exports.EstacionamentoListarComponent = EstacionamentoListarComponent;
//# sourceMappingURL=estacionamento-listar-component.js.map