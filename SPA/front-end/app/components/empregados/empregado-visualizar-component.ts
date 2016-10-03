import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { Departamento } from '../.././models/departamento';
import { Estacionamento } from '../.././models/estacionamento';
import { EmpregadoService } from '../.././services/empregado-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'empregado-visualizar',
    templateUrl: 'app/views/empregados/visualizar.html',
    providers: [EmpregadoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EmpregadoVisualizarComponent implements OnInit {

    private empregado: Empregado;
    private error: string;

    constructor(
        private route: ActivatedRoute,
        private empregadoService: EmpregadoService) {
    }

    buscar(id: number) {
        this.empregadoService.buscarPorId(id).subscribe(
            data => this.empregado = data,
            error => this.error = "Erro ao buscar empregado"
        );
    }

    ngOnInit() {
        this.empregado = new Empregado();
        this.empregado.departamento = new Departamento();
        this.empregado.estacionamento = new Estacionamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }
}