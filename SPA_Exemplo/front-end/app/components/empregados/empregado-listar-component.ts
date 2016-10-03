import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { EmpregadoService } from '../.././services/empregado-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'empregado-listar',
	templateUrl: 'app/views/empregados/listar.html',
	providers: [EmpregadoService],
	directives: [ROUTER_DIRECTIVES]
})
export class EmpregadoListarComponent implements OnInit {

	private empregados: Empregado[];
	private mensagem: string;
	private error: string;

	constructor(private empregadoService: EmpregadoService) {
	}

	ngOnInit() {
		this.listar();
	}

	listar() {
        this.empregadoService.listar().subscribe(
            data => this.empregados = data,
            error => this.error = "Erro ao listar empregados"
        );
    }

	excluir(id: number) {
		this.empregadoService.excluir(id).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao excluir empregado",
            () => this.listar()
        );
	}
}