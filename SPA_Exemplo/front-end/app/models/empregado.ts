import { Projeto } from './projeto';
import { Departamento } from './departamento';
import { Estacionamento } from './estacionamento';
export class Empregado {
	constructor(
		public nome?: string,
		public email?: string,
		public departamento?: Departamento,
		public estacionamento?: Estacionamento,
		public projetos?:Projeto[]){}
}