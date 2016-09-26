import { Projeto } from './projeto';
export class Empregado {
	constructor(
		public nome?: string,
		public email?: string,
		public projetos?:Projeto[]){}
}