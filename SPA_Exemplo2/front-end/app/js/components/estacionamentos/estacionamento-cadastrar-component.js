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
var estacionamento_1 = require('../.././models/estacionamento');
var estacionamento_service_1 = require('../.././services/estacionamento-service');
var router_1 = require('@angular/router');
var EstacionamentoCadastrarComponent = (function () {
    function EstacionamentoCadastrarComponent(router, estacionamentoService) {
        this.router = router;
        this.estacionamentoService = estacionamentoService;
    }
    EstacionamentoCadastrarComponent.prototype.ngOnInit = function () {
        this.estacionamento = new estacionamento_1.Estacionamento();
    };
    EstacionamentoCadastrarComponent.prototype.cadastrar = function () {
        var _this = this;
        this.estacionamentoService.cadastrar(this.estacionamento).subscribe(function (data) { return _this.mensagem = data; }, function (error) { return _this.error = "Erro ao cadastrar estacionamento"; }, function () { return _this.router.navigate(['/estacionamento-listar']); });
    };
    EstacionamentoCadastrarComponent = __decorate([
        core_1.Component({
            selector: 'estacionamento-cadastrar',
            templateUrl: 'app/views/estacionamentos/cadastrar.html',
            providers: [estacionamento_service_1.EstacionamentoService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, estacionamento_service_1.EstacionamentoService])
    ], EstacionamentoCadastrarComponent);
    return EstacionamentoCadastrarComponent;
}());
exports.EstacionamentoCadastrarComponent = EstacionamentoCadastrarComponent;
//# sourceMappingURL=estacionamento-cadastrar-component.js.map