import { Component } from '@angular/core';
import { Projeto } from '../.././models/projeto';
import { ProjetoService } from '../.././services/projeto-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'projeto-editar',
    templateUrl: 'app/views/projetos/editar.html',
    providers: [ProjetoService],
    directives: [ROUTER_DIRECTIVES]
})
export class ProjetoEditarComponent implements OnInit {

    private projeto: Projeto;
    private mensagem: string;
    private error: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projetoService: ProjetoService) {
    }

    ngOnInit() {
        this.projeto = new Projeto();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);        
    }

    buscar(id: number) {
        this.projetoService.buscarPorId(id).subscribe(
            data => this.projeto = data[0],
            error => this.error = "Erro ao buscar projeto"
        );
    }

    atualizar() {
        this.projetoService.atualizar(this.projeto).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar projeto",
            () => this.router.navigate(['/projeto-listar'])
        );
    }
}