"use strict";
var projeto_listar_component_1 = require('./projeto-listar-component');
var projeto_cadastrar_component_1 = require('./projeto-cadastrar-component');
var projeto_editar_component_1 = require('./projeto-editar-component');
var projeto_visualizar_component_1 = require('./projeto-visualizar-component');
exports.ProjetosRoutes = [
    { path: 'projeto-listar', component: projeto_listar_component_1.ProjetoListarComponent },
    { path: 'projeto-cadastrar', component: projeto_cadastrar_component_1.ProjetoCadastrarComponent },
    { path: 'projeto-editar/:id', component: projeto_editar_component_1.ProjetoEditarComponent },
    { path: 'projeto-visualizar/:id', component: projeto_visualizar_component_1.ProjetoVisualizarComponent },
    { path: '', redirectTo: '/projeto-listar', terminal: true }
];
//# sourceMappingURL=projetos-routes.js.map