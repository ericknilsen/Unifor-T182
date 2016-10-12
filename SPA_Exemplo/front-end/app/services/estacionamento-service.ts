import { Injectable } from '@angular/core';
import { Estacionamento } from '../models/estacionamento';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EstacionamentoService {

	urlServico: string = "";

    constructor(private http: Http) {

    }

	listar() {
		return null;     
    }

	cadastrar(estacionamento: Estacionamento) {
 		return null;    
    }

	atualizar(estacionamento: Estacionamento) {
		return null;     
    }


	excluir(id: number) {
		return null;
	}


	buscarPorId(id: number) {
		return null;
	}
}