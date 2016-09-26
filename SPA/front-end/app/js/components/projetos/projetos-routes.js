"use strict";
const projeto_listar_component_1 = require('./projeto-listar-component');
const projeto_cadastrar_component_1 = require('./projeto-cadastrar-component');
const projeto_editar_component_1 = require('./projeto-editar-component');
const projeto_visualizar_component_1 = require('./projeto-visualizar-component');
exports.ProjetosRoutes = [
    { path: 'projeto-listar', component: projeto_listar_component_1.ProjetoListarComponent },
    { path: 'projeto-cadastrar', component: projeto_cadastrar_component_1.ProjetoCadastrarComponent },
    { path: 'projeto-editar/:id', component: projeto_editar_component_1.ProjetoEditarComponent },
    { path: 'projeto-visualizar/:id', component: projeto_visualizar_component_1.ProjetoVisualizarComponent },
    { path: '', redirectTo: '/projeto-listar', terminal: true }
];
//# sourceMappingURL=projetos-routes.js.map