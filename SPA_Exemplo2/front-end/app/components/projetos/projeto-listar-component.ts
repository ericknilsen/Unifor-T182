import { Component } from '@angular/core';
import { Projeto } from '../.././models/projeto';
import { ProjetoService } from '../.././services/projeto-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'projeto-listar',
	templateUrl: 'app/views/projetos/listar.html',
	providers: [ProjetoService],
	directives: [ROUTER_DIRECTIVES]
})
export class ProjetoListarComponent implements OnInit {

	private projetos: Projeto[];
	private mensagem: string;
	private error: string;

	constructor(private projetoService: ProjetoService) {
	}

	ngOnInit() {
		this.listar();
	}

	listar() {
        this.projetoService.listar().subscribe(
            data => this.projetos = data,
            error => this.error = "Erro ao listar projetos"
        );
    }

	excluir(id: number) {
		this.projetoService.excluir(id).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao excluir projeto",
            () => this.listar()
        );
	}
}