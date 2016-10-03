import { Component } from '@angular/core';
import { Estacionamento } from '../.././models/estacionamento';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'estacionamento-visualizar',
    templateUrl: 'app/views/estacionamentos/visualizar.html',
    providers: [EstacionamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EstacionamentoVisualizarComponent implements OnInit {
   
    private estacionamento: Estacionamento;    
	private error: string;

    constructor(
        private route: ActivatedRoute,
        private estacionamentoService: EstacionamentoService) {
    }

    buscar(id: number) {        
        this.estacionamentoService.buscarPorId(id).subscribe(
            data => this.estacionamento = data,
            error => this.error = "Erro ao buscar estacionamento"            
        );
    }

    ngOnInit() {
        this.estacionamento = new Estacionamento();
        var id = +this.route.snapshot.params['id'];        
        this.buscar(id);       
    }


}