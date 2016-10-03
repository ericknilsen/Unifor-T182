import { Component } from '@angular/core';
import { Departamento } from '../.././models/departamento';
import { DepartamentoService } from '../.././services/departamento-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'departamento-cadastrar',
    templateUrl: 'app/views/departamentos/cadastrar.html',
    providers: [DepartamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class DepartamentoCadastrarComponent implements OnInit {

    private departamento: Departamento;
    private mensagem: string;
    private error: string;

    constructor(private router: Router, private departamentoService: DepartamentoService) {
    }

    ngOnInit() {
        this.departamento = new Departamento();
    } 

    cadastrar() {
        this.departamentoService.cadastrar(this.departamento).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar departamento",
            () => this.router.navigate(['/departamento-listar'])
        );       
    }
}