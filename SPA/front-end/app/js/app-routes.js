"use strict";
const router_1 = require('@angular/router');
const empregados_routes_1 = require('./components/empregados/empregados-routes');
const projetos_routes_1 = require('./components/projetos/projetos-routes');
exports.routes = [
    ...empregados_routes_1.EmpregadosRoutes, ...projetos_routes_1.ProjetosRoutes
];
exports.APP_ROUTER_PROVIDERS = [router_1.provideRouter(exports.routes)];
//# sourceMappingURL=app-routes.js.map