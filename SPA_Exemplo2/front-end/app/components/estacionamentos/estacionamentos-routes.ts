import { RouterConfig } from '@angular/router'; 
import { EstacionamentoListarComponent } from './estacionamento-listar-component';
import { EstacionamentoCadastrarComponent } from './estacionamento-cadastrar-component';
import { EstacionamentoEditarComponent } from './estacionamento-editar-component';
import { EstacionamentoVisualizarComponent } from './estacionamento-visualizar-component';

export const EstacionamentoRoutes: RouterConfig = [
	{ path: 'estacionamento-listar', component: EstacionamentoListarComponent }, 
	{ path: 'estacionamento-cadastrar', component: EstacionamentoCadastrarComponent }, 
	{ path: 'estacionamento-editar/:id', component: EstacionamentoEditarComponent },
	{ path: 'estacionamento-visualizar/:id', component: EstacionamentoVisualizarComponent },
	{ path: '', redirectTo: '/estacionamento-listar', terminal: true }
];