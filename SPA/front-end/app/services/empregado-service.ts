import { Injectable } from '@angular/core';
import { Empregado } from '../models/empregado';

@Injectable()
export class EmpregadoService {

	listarTodos() {
		var empregados:string = sessionStorage['empregados'];
		return empregados ? JSON.parse(empregados) : [];
	}

	cadastrar(empregado: Empregado) {
		var empregados:Empregado[] = this.listarTodos();
		empregados.push(empregado);
		sessionStorage['empregados'] = JSON.stringify(empregados);
	}

	atualizar(id: number, empregado: Empregado) {
		var empregados:Empregado[] = this.listarTodos();
		empregados[id].nome = empregado.nome;
		empregados[id].email = empregado.email;
		sessionStorage['empregados'] = JSON.stringify(empregados);
	}

	excluir(id: number) {
		var empregados:Empregado[] = this.listarTodos();
		empregados.splice(id, 1);
		sessionStorage['empregados'] = JSON.stringify(empregados);
	}

	buscarPorId(id: number) {
		var empregados:Empregado[] = this.listarTodos();
		return empregados[id];
	}
}