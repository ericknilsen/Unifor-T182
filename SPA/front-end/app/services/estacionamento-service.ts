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
     
    }

	cadastrar(estacionamento: Estacionamento) {
     
    }

	atualizar(estacionamento: Estacionamento) {
     
    }


	excluir(id: number) {

	}


	buscarPorId(id: number) {

	}
}