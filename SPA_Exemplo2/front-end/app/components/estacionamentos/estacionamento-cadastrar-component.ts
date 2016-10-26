import { Component } from '@angular/core';
import { Estacionamento } from '../.././models/estacionamento';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'estacionamento-cadastrar',
    templateUrl: 'app/views/estacionamentos/cadastrar.html',
    providers: [EstacionamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EstacionamentoCadastrarComponent implements OnInit {

    private estacionamento: Estacionamento;
    private mensagem: string;
    private error: string;

    constructor(private router: Router, private estacionamentoService: EstacionamentoService) {
    }

    ngOnInit() {
        this.estacionamento = new Estacionamento();
    } 

    cadastrar() {
        this.estacionamentoService.cadastrar(this.estacionamento).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar estacionamento",
            () => this.router.navigate(['/estacionamento-listar'])
        );       
    }
}