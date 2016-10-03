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
       
    }

	cadastrar(projeto: Projeto) {
       
    }

	atualizar(projeto: Projeto) {

    }


	excluir(id: number) {

	}


	buscarPorId(id: number) {

	}
}