import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { EmpregadoService } from '../.././services/empregado-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
    selector: 'empregado-editar',
    templateUrl: 'app/views/empregados/editar.html',
    providers: [ EmpregadoService ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class EmpregadoEditarComponent implements OnInit {

    private id: number;
    private empregado: Empregado;

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private empregadoService: EmpregadoService) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.empregado = this.empregadoService.buscarPorId(this.id);
    }

    atualizar() {
        this.empregadoService.atualizar(this.id, this.empregado);
        this.router.navigate(['/empregado-listar']);
    }
}