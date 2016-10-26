"use strict";
const aluno_listar_component_1 = require('./aluno-listar-component');
//import { AlunoCadastrarComponent } from './aluno-cadastrar-component';
//import { AlunoEditarComponent } from './aluno-editar-component';
//import { AlunoVisualizarComponent } from './aluno-visualizar-component';
exports.AlunosRoutes = [
    { path: 'aluno-listar', component: aluno_listar_component_1.AlunoListarComponent },
    //	{ path: 'aluno-cadastrar', component: AlunoCadastrarComponent }, 
    //	{ path: 'aluno-editar/:id', component: AlunoEditarComponent },
    //	{ path: 'aluno-visualizar/:id', component: AlunoVisualizarComponent },
    { path: '', redirectTo: '/aluno-listar', terminal: true }
];
//# sourceMappingURL=alunos-routes.js.map