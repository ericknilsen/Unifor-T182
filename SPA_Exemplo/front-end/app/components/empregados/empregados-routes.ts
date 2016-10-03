import { RouterConfig } from '@angular/router'; 
import { EmpregadoListarComponent } from './empregado-listar-component';
import { EmpregadoCadastrarComponent } from './empregado-cadastrar-component';
import { EmpregadoEditarComponent } from './empregado-editar-component';
import { EmpregadoVisualizarComponent } from './empregado-visualizar-component';

export const EmpregadosRoutes: RouterConfig = [
	{ path: 'empregado-listar', component: EmpregadoListarComponent }, 
	{ path: 'empregado-cadastrar', component: EmpregadoCadastrarComponent }, 
	{ path: 'empregado-editar/:id', component: EmpregadoEditarComponent },
	{ path: 'empregado-visualizar/:id', component: EmpregadoVisualizarComponent },
	{ path: '', redirectTo: '/empregado-listar', terminal: true }
];