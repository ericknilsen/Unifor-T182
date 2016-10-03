import { Component } from '@angular/core';
import { Departamento } from '../.././models/departamento';
import { DepartamentoService } from '../.././services/departamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'departamento-visualizar',
    templateUrl: 'app/views/departamentos/visualizar.html',
    providers: [DepartamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class DepartamentoVisualizarComponent implements OnInit {
   
    private departamento: Departamento;    
	private error: string;

    constructor(
        private route: ActivatedRoute,
        private departamentoService: DepartamentoService) {
    }

    buscar(id: number) {        
        this.departamentoService.buscarPorId(id).subscribe(
            data => this.departamento = data,
            error => this.error = "Erro ao buscar departamento"            
        );
    }

    ngOnInit() {
        this.departamento = new Departamento();
        var id = +this.route.snapshot.params['id'];        
        this.buscar(id);       
    }


}