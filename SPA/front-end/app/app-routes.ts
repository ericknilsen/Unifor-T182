import { provideRouter, RouterConfig } from '@angular/router'; 
import { EmpregadosRoutes } from './components/empregados/empregados-routes';
import { ProjetosRoutes } from './components/projetos/projetos-routes';

export const routes: RouterConfig = [
	...EmpregadosRoutes,...ProjetosRoutes
]; 

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];