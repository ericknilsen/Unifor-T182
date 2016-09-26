import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { Projeto } from '../.././models/projeto';
import { EmpregadoService } from '../.././services/empregado-service';
import { ProjetoService } from '../.././services/projeto-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'empregado-cadastrar',
    templateUrl: 'app/views/empregados/cadastrar.html',
    providers: [EmpregadoService, ProjetoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EmpregadoCadastrarComponent implements OnInit {
 
    private empregado: Empregado;
    private projetos: Projeto[];

    constructor(private router: Router, private empregadoService: EmpregadoService, private projetoService: ProjetoService) {
    }

    ngOnInit() {        
        this.empregado = new Empregado();
        this.listarProjetos();
    }

    cadastrar() {
        let projetosSelecionados = this.projetos.filter((x) => x.selected)        
        this.empregado.projetos = projetosSelecionados;

        this.empregadoService.cadastrar(this.empregado);
        this.router.navigate(['/empregado-listar']);
    }

    listarProjetos() {
        this.projetos = this.projetoService.listarTodos();
    }

    checkbox(projeto) {
        projeto.selected = (projeto.selected) ? false : true;      
    }
 
}