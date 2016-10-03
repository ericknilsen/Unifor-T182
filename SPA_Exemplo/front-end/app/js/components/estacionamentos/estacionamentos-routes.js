"use strict";
const estacionamento_listar_component_1 = require('./estacionamento-listar-component');
const estacionamento_cadastrar_component_1 = require('./estacionamento-cadastrar-component');
const estacionamento_editar_component_1 = require('./estacionamento-editar-component');
const estacionamento_visualizar_component_1 = require('./estacionamento-visualizar-component');
exports.EstacionamentoRoutes = [
    { path: 'estacionamento-listar', component: estacionamento_listar_component_1.EstacionamentoListarComponent },
    { path: 'estacionamento-cadastrar', component: estacionamento_cadastrar_component_1.EstacionamentoCadastrarComponent },
    { path: 'estacionamento-editar/:id', component: estacionamento_editar_component_1.EstacionamentoEditarComponent },
    { path: 'estacionamento-visualizar/:id', component: estacionamento_visualizar_component_1.EstacionamentoVisualizarComponent },
    { path: '', redirectTo: '/estacionamento-listar', terminal: true }
];
//# sourceMappingURL=estacionamentos-routes.js.map