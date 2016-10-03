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
        
    }

	cadastrar(empregado: Empregado) {

    }

	atualizar(empregado: Empregado) {

    }

	excluir(id: number) {

	}

	buscarPorId(id: number) {

	}
}