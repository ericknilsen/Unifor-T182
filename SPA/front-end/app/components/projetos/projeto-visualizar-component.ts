import { Component } from '@angular/core';
import { Projeto } from '../.././models/projeto';
import { ProjetoService } from '../.././services/projeto-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'projeto-visualizar',
    templateUrl: 'app/views/projetos/visualizar.html',
    providers: [ProjetoService],
    directives: [ROUTER_DIRECTIVES]
})
export class ProjetoVisualizarComponent implements OnInit {
   
    private projeto: Projeto;    
	private error: string;

    constructor(
        private route: ActivatedRoute,
        private projetoService: ProjetoService) {
    }

    buscar(id: number) {
        this.projetoService.buscarPorId(id).subscribe(
            data => this.projeto = data[0],
            error => this.error = "Erro ao buscar projeto"            
        );
    }

    ngOnInit() {
        this.projeto = new Projeto();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);       
    }


}