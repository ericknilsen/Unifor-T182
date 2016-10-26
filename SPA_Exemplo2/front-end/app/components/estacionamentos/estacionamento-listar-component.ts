import { Component } from '@angular/core';
import { Estacionamento } from '../.././models/estacionamento';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'estacionamento-listar',
	templateUrl: 'app/views/estacionamentos/listar.html',
	providers: [EstacionamentoService],
	directives: [ROUTER_DIRECTIVES]
})
export class EstacionamentoListarComponent implements OnInit {

	private estacionamentos: Estacionamento[];
	private mensagem: string;
	private error: string;

	constructor(private estacionamentoService: EstacionamentoService) {
	}

	ngOnInit() {
		this.listar();
	}

	listar() {
        this.estacionamentoService.listar().subscribe(
            data => this.estacionamentos = data,
            error => this.error = "Erro ao listar estacionamentos"
        );
    }

	excluir(id: number) {
		this.estacionamentoService.excluir(id).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao excluir estacionamento",
            () => this.listar()
        );
	}
}