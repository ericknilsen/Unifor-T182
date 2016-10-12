import { Injectable } from '@angular/core';
import { Projeto } from '../models/projeto';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProjetoService {

	urlServico: string = "";

    constructor(private http: Http) {

    }

	listar() {
  		return null;     
    }

	cadastrar(projeto: Projeto) {
  		return null;     
    }

	atualizar(projeto: Projeto) {
		return null;
    }


	excluir(id: number) {
		return null;
	}


	buscarPorId(id: number) {
		return null;
	}
}