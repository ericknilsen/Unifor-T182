import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { EmpregadoService } from '../.././services/empregado-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'empregado-listar',
	templateUrl: 'app/views/empregados/listar.html',
	providers: [ EmpregadoService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class EmpregadoListarComponent implements OnInit {

	private empregados: Empregado[];

	constructor(private empregadoService: EmpregadoService) {
	}

	ngOnInit() {
		this.empregados = this.empregadoService.listarTodos();
	}

	excluir(id: number) {
		this.empregadoService.excluir(id);
		this.empregados = this.empregadoService.listarTodos();
	}
}