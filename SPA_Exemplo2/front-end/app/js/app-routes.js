"use strict";
var router_1 = require('@angular/router');
var empregados_routes_1 = require('./components/empregados/empregados-routes');
var projetos_routes_1 = require('./components/projetos/projetos-routes');
var departamentos_routes_1 = require('./components/departamentos/departamentos-routes');
var estacionamentos_routes_1 = require('./components/estacionamentos/estacionamentos-routes');
exports.routes = empregados_routes_1.EmpregadosRoutes.concat(projetos_routes_1.ProjetosRoutes, departamentos_routes_1.DepartamentoRoutes, estacionamentos_routes_1.EstacionamentoRoutes);
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app-routes.js.map