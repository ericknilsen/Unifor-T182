import { Component } from '@angular/core';
import { Departamento } from '../.././models/departamento';
import { DepartamentoService } from '../.././services/departamento-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'departamento-editar',
    templateUrl: 'app/views/departamentos/editar.html',
    providers: [DepartamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class DepartamentoEditarComponent implements OnInit {

    private departamento: Departamento;
    private mensagem: string;
    private error: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private departamentoService: DepartamentoService) {
    }

    ngOnInit() {
        this.departamento = new Departamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);        
    }

    buscar(id: number) {
        this.departamentoService.buscarPorId(id).subscribe(
            data => this.departamento = data,
            error => this.error = "Erro ao buscar departamento"
        );
    }

    atualizar() {
        this.departamentoService.atualizar(this.departamento).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar departamento",
            () => this.router.navigate(['/departamento-listar'])
        );
    }
}