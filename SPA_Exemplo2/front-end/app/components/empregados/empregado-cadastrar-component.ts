import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { Departamento } from '../.././models/departamento';
import { Projeto } from '../.././models/projeto';
import { Estacionamento } from '../.././models/estacionamento';
import { EmpregadoService } from '../.././services/empregado-service';
import { ProjetoService } from '../.././services/projeto-service';
import { DepartamentoService } from '../.././services/departamento-service';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'empregado-cadastrar',
    templateUrl: 'app/views/empregados/cadastrar.html',
    providers: [EmpregadoService, ProjetoService, DepartamentoService, EstacionamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EmpregadoCadastrarComponent implements OnInit {

    private empregado: Empregado;
    private departamentos: Departamento[];
    private projetos: Projeto[];
    private estacionamentos: Estacionamento[];
    private mensagem: string;
    private error: string;

    constructor(private router: Router,
        private empregadoService: EmpregadoService,
        private departamentoService: DepartamentoService,
        private projetoService: ProjetoService,
        private estacionamentoService: EstacionamentoService) {
    }

    ngOnInit() {
        this.empregado = new Empregado();
        this.listarDepartamentos();
        this.listarProjetos();
        this.listarEstacionamentos();       
    }

    cadastrar() {
        let projetosSelecionados = this.projetos.filter((x) => x.selected)
        this.empregado.projetos = projetosSelecionados;

        this.empregadoService.cadastrar(this.empregado).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao cadastrar projeto",
            () => this.router.navigate(['/empregado-listar'])
        );
    }

    listarDepartamentos() {
        this.departamentoService.listar().subscribe(
            data => this.departamentos = data,
            error => this.error = "Erro ao listar departamento"
        );
    }

    listarProjetos() {
        this.projetoService.listar().subscribe(
            data => this.projetos = data,
            error => this.error = "Erro ao listar projetos"
        );
    }

    listarEstacionamentos() {
        this.estacionamentoService.listar().subscribe(
            data => this.estacionamentos = data,
            error => this.error = "Erro ao listar projetos"
        );
    }

    checkbox(projeto) {
        projeto.selected = (projeto.selected) ? false : true;
    }

}