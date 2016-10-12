import { Injectable } from '@angular/core';
import { Empregado } from '../models/empregado';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EmpregadoService {

	urlServico: string = "";

    constructor(private http: Http) {

    }

	listar() {
		return null;        
    }

	cadastrar(empregado: Empregado) {
		return null;
    }

	atualizar(empregado: Empregado) {
		return null;
    }

	excluir(id: number) {
		return null;
	}

	buscarPorId(id: number) {
		return null;
	}
}