import { Component } from '@angular/core';
import { Projeto } from '../.././models/projeto';
import { ProjetoService } from '../.././services/projeto-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'projeto-cadastrar',
    templateUrl: 'app/views/projetos/cadastrar.html',
    providers: [ProjetoService],
    directives: [ROUTER_DIRECTIVES]
})
export class ProjetoCadastrarComponent implements OnInit {

    private projeto: Projeto;
    private mensagem: string;
    private error: string;

    constructor(private router: Router, private projetoService: ProjetoService) {
    }

    ngOnInit() {
        this.projeto = new Projeto();
    } 

    cadastrar() {
        this.projetoService.cadastrar(this.projeto).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar projeto",
            () => this.router.navigate(['/projeto-listar'])
        );       
    }
}