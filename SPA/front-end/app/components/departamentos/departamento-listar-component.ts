import { Component } from '@angular/core';
import { Departamento } from '../.././models/departamento';
import { DepartamentoService } from '../.././services/departamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'departamento-listar',
	templateUrl: 'app/views/departamentos/listar.html',
	providers: [DepartamentoService],
	directives: [ROUTER_DIRECTIVES]
})
export class DepartamentoListarComponent implements OnInit {

	private departamentos: Departamento[];
	private mensagem: string;
	private error: string;

	constructor(private departamentoService: DepartamentoService) {
	}

	ngOnInit() {
		this.listar();
	}

	listar() {
        this.departamentoService.listar().subscribe(
            data => this.departamentos = data,
            error => this.error = "Erro ao listar departamentos"
        );
    }

	excluir(id: number) {
		this.departamentoService.excluir(id).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao excluir departamento",
            () => this.listar()
        );
	}
}