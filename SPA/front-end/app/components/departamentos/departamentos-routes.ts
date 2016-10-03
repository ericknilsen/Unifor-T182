import { RouterConfig } from '@angular/router'; 
import { DepartamentoListarComponent } from './departamento-listar-component';
import { DepartamentoCadastrarComponent } from './departamento-cadastrar-component';
import { DepartamentoEditarComponent } from './departamento-editar-component';
import { DepartamentoVisualizarComponent } from './departamento-visualizar-component';

export const DepartamentoRoutes: RouterConfig = [
	{ path: 'departamento-listar', component: DepartamentoListarComponent }, 
	{ path: 'departamento-cadastrar', component: DepartamentoCadastrarComponent }, 
	{ path: 'departamento-editar/:id', component: DepartamentoEditarComponent },
	{ path: 'departamento-visualizar/:id', component: DepartamentoVisualizarComponent },
	{ path: '', redirectTo: '/departamento-listar', terminal: true }
];