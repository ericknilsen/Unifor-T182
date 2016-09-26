import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { EmpregadoService } from '../.././services/empregado-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'empregado-visualizar',
    templateUrl: 'app/views/empregados/visualizar.html',
    providers: [ EmpregadoService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EmpregadoVisualizarComponent implements OnInit {

    private id: number;
    private empregado: Empregado;

    constructor(
        private route: ActivatedRoute, 
        private empregadoService: EmpregadoService) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.empregado = this.empregadoService.buscarPorId(this.id);
    }
}