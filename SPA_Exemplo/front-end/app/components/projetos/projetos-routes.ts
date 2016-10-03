import { RouterConfig } from '@angular/router'; 
import { ProjetoListarComponent } from './projeto-listar-component';
import { ProjetoCadastrarComponent } from './projeto-cadastrar-component';
import { ProjetoEditarComponent } from './projeto-editar-component';
import { ProjetoVisualizarComponent } from './projeto-visualizar-component';

export const ProjetosRoutes: RouterConfig = [
	{ path: 'projeto-listar', component: ProjetoListarComponent }, 
	{ path: 'projeto-cadastrar', component: ProjetoCadastrarComponent }, 
	{ path: 'projeto-editar/:id', component: ProjetoEditarComponent },
	{ path: 'projeto-visualizar/:id', component: ProjetoVisualizarComponent },
	{ path: '', redirectTo: '/projeto-listar', terminal: true }
];