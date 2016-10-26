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
var projeto_service_1 = require('../.././services/projeto-service');
var router_1 = require('@angular/router');
var ProjetoListarComponent = (function () {
    function ProjetoListarComponent(projetoService) {
        this.projetoService = projetoService;
    }
    ProjetoListarComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ProjetoListarComponent.prototype.listar = function () {
        var _this = this;
        this.projetoService.listar().subscribe(function (data) { return _this.projetos = data; }, function (error) { return _this.error = "Erro ao listar projetos"; });
    };
    ProjetoListarComponent.prototype.excluir = function (id) {
        var _this = this;
        this.projetoService.excluir(id).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao excluir projeto"; }, function () { return _this.listar(); });
    };
    ProjetoListarComponent = __decorate([
        core_1.Component({
            selector: 'projeto-listar',
            templateUrl: 'app/views/projetos/listar.html',
            providers: [projeto_service_1.ProjetoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [projeto_service_1.ProjetoService])
    ], ProjetoListarComponent);
    return ProjetoListarComponent;
}());
exports.ProjetoListarComponent = ProjetoListarComponent;
//# sourceMappingURL=projeto-listar-component.js.map