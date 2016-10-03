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
const estacionamento_1 = require('../.././models/estacionamento');
const estacionamento_service_1 = require('../.././services/estacionamento-service');
const router_1 = require('@angular/router');
let EstacionamentoEditarComponent = class EstacionamentoEditarComponent {
    constructor(route, router, departamentoService) {
        this.route = route;
        this.router = router;
        this.departamentoService = departamentoService;
    }
    ngOnInit() {
        this.estacionamento = new estacionamento_1.Estacionamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }
    buscar(id) {
        this.departamentoService.buscarPorId(id).subscribe(data => this.estacionamento = data, error => this.error = "Erro ao buscar estacionamento");
    }
    atualizar() {
        this.departamentoService.atualizar(this.estacionamento).subscribe(data => this.mensagem = data, error => this.error = "Erro ao editar estacionamento", () => this.router.navigate(['/estacionamento-listar']));
    }
};
EstacionamentoEditarComponent = __decorate([
    core_1.Component({
        selector: 'estacionamento-editar',
        templateUrl: 'app/views/estacionamentos/editar.html',
        providers: [estacionamento_service_1.EstacionamentoService],
        directives: [router_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, estacionamento_service_1.EstacionamentoService])
], EstacionamentoEditarComponent);
exports.EstacionamentoEditarComponent = EstacionamentoEditarComponent;
//# sourceMappingURL=estacionamento-editar-component.js.map