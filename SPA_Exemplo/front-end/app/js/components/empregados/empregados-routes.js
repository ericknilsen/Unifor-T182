"use strict";
var empregado_listar_component_1 = require('./empregado-listar-component');
var empregado_cadastrar_component_1 = require('./empregado-cadastrar-component');
var empregado_editar_component_1 = require('./empregado-editar-component');
var empregado_visualizar_component_1 = require('./empregado-visualizar-component');
exports.EmpregadosRoutes = [
    { path: 'empregado-listar', component: empregado_listar_component_1.EmpregadoListarComponent },
    { path: 'empregado-cadastrar', component: empregado_cadastrar_component_1.EmpregadoCadastrarComponent },
    { path: 'empregado-editar/:id', component: empregado_editar_component_1.EmpregadoEditarComponent },
    { path: 'empregado-visualizar/:id', component: empregado_visualizar_component_1.EmpregadoVisualizarComponent },
    { path: '', redirectTo: '/empregado-listar', terminal: true }
];
//# sourceMappingURL=empregados-routes.js.map