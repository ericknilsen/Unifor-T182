import { Component } from '@angular/core';
import { Estacionamento } from '../.././models/estacionamento';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'estacionamento-editar',
    templateUrl: 'app/views/estacionamentos/editar.html',
    providers: [EstacionamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EstacionamentoEditarComponent implements OnInit {

    private estacionamento: Estacionamento;
    private mensagem: string;
    private error: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private departamentoService: EstacionamentoService) {
    }

    ngOnInit() {
        this.estacionamento = new Estacionamento();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);        
    }

    buscar(id: number) {
        this.departamentoService.buscarPorId(id).subscribe(
            data => this.estacionamento = data,
            error => this.error = "Erro ao buscar estacionamento"
        );
    }

    atualizar() {
        this.departamentoService.atualizar(this.estacionamento).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar estacionamento",
            () => this.router.navigate(['/estacionamento-listar'])
        );
    }
}