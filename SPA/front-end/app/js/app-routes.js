"use strict";
const router_1 = require('@angular/router');
const empregados_routes_1 = require('./components/empregados/empregados-routes');
const projetos_routes_1 = require('./components/projetos/projetos-routes');
const departamentos_routes_1 = require('./components/departamentos/departamentos-routes');
const estacionamentos_routes_1 = require('./components/estacionamentos/estacionamentos-routes');
exports.routes = [
    ...empregados_routes_1.EmpregadosRoutes,
    ...projetos_routes_1.ProjetosRoutes,
    ...departamentos_routes_1.DepartamentoRoutes,
    ...estacionamentos_routes_1.EstacionamentoRoutes
];
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app-routes.js.map