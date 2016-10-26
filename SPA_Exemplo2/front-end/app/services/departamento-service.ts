import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DepartamentoService {

	urlServico: string = "";

    constructor(private http: Http) {

    }

	listar() {
        return this.http.get(this.urlServico).map(res => res.json());
    }

	cadastrar(departamento: Departamento) {
		return null;   
    }

	atualizar(departamento: Departamento) {
		return null;   
    }

	excluir(id: number) {
		return null;	
	}

	buscarPorId(id: number) {
		return null;	
	}
}