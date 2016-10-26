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
var projeto_1 = require('../.././models/projeto');
var projeto_service_1 = require('../.././services/projeto-service');
var router_1 = require('@angular/router');
var ProjetoVisualizarComponent = (function () {
    function ProjetoVisualizarComponent(route, projetoService) {
        this.route = route;
        this.projetoService = projetoService;
    }
    ProjetoVisualizarComponent.prototype.buscar = function (id) {
        var _this = this;
        this.projetoService.buscarPorId(id).subscribe(function (data) { return _this.projeto = data; }, function (error) { return _this.error = "Erro ao buscar projeto"; });
    };
    ProjetoVisualizarComponent.prototype.ngOnInit = function () {
        this.projeto = new projeto_1.Projeto();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    };
    ProjetoVisualizarComponent = __decorate([
        core_1.Component({
            selector: 'projeto-visualizar',
            templateUrl: 'app/views/projetos/visualizar.html',
            providers: [projeto_service_1.ProjetoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, projeto_service_1.ProjetoService])
    ], ProjetoVisualizarComponent);
    return ProjetoVisualizarComponent;
}());
exports.ProjetoVisualizarComponent = ProjetoVisualizarComponent;
//# sourceMappingURL=projeto-visualizar-component.js.map