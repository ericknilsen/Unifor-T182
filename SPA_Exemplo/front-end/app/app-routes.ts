import { provideRouter, RouterConfig } from '@angular/router';
import { EmpregadosRoutes } from './components/empregados/empregados-routes';
import { ProjetosRoutes } from './components/projetos/projetos-routes';
import { DepartamentoRoutes } from './components/departamentos/departamentos-routes';
import { EstacionamentoRoutes } from './components/estacionamentos/estacionamentos-routes';

export const routes: RouterConfig = [
	...EmpregadosRoutes,
	...ProjetosRoutes,
	...DepartamentoRoutes,
	...EstacionamentoRoutes
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];