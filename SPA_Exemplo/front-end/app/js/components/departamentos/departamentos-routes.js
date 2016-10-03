"use strict";
const departamento_listar_component_1 = require('./departamento-listar-component');
const departamento_cadastrar_component_1 = require('./departamento-cadastrar-component');
const departamento_editar_component_1 = require('./departamento-editar-component');
const departamento_visualizar_component_1 = require('./departamento-visualizar-component');
exports.DepartamentoRoutes = [
    { path: 'departamento-listar', component: departamento_listar_component_1.DepartamentoListarComponent },
    { path: 'departamento-cadastrar', component: departamento_cadastrar_component_1.DepartamentoCadastrarComponent },
    { path: 'departamento-editar/:id', component: departamento_editar_component_1.DepartamentoEditarComponent },
    { path: 'departamento-visualizar/:id', component: departamento_visualizar_component_1.DepartamentoVisualizarComponent },
    { path: '', redirectTo: '/departamento-listar', terminal: true }
];
//# sourceMappingURL=departamentos-routes.js.map