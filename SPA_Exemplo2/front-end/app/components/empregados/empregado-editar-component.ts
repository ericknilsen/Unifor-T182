import { Component } from '@angular/core';
import { Empregado } from '../.././models/empregado';
import { Departamento } from '../.././models/departamento';
import { Projeto } from '../.././models/projeto';
import { Estacionamento } from '../.././models/estacionamento';
import { EmpregadoService } from '../.././services/empregado-service';
import { ProjetoService } from '../.././services/projeto-service';
import { EstacionamentoService } from '../.././services/estacionamento-service';
import { DepartamentoService } from '../.././services/departamento-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'empregado-editar',
    templateUrl: 'app/views/empregados/editar.html',
    providers: [EmpregadoService, ProjetoService, DepartamentoService, EstacionamentoService],
    directives: [ROUTER_DIRECTIVES]
})
export class EmpregadoEditarComponent implements OnInit {

    private empregado: Empregado;
    private departamentos: Departamento[];
    private projetos: Projeto[];
    private estacionamentos: Estacionamento[];
    private mensagem: string;
    private error: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private empregadoService: EmpregadoService,
        private departamentoService: DepartamentoService,
        private estacionamentoService: EstacionamentoService,
        private projetoService: ProjetoService) {
    }

    ngOnInit() {
        this.empregado = new Empregado();
        this.empregado.projetos = new Array<Projeto>();
        this.projetos = new Array<Projeto>();

        this.listarDepartamentos();
        this.listarEstacionamentos();
        this.listarProjetos();
        var id = +this.route.snapshot.params['id'];
        this.buscar(id);
    }

    buscar(id: number) {
        this.empregadoService.buscarPorId(id).subscribe(
            data => this.empregado = data,
            error => this.error = "Erro ao buscar empregado",
            () => this.carregaDados()
        );
    }

    atualizar() {
        let projetosSelecionados = this.projetos.filter((x) => x.selected)
        this.empregado.projetos = projetosSelecionados;

        this.empregadoService.atualizar(this.empregado).subscribe(
            data => this.mensagem = data,
            error => this.error = "Erro ao editar empregado",
            () => this.router.navigate(['/empregado-listar'])
        );
    }

    listarDepartamentos() {
        this.departamentoService.listar().subscribe(
            data => this.departamentos = data,
            error => this.error = "Erro ao listar departamento"
        );
    }

    listarEstacionamentos() {
        this.estacionamentoService.listar().subscribe(
            data => this.estacionamentos = data,
            error => this.error = "Erro ao listar estacionamentos"
        );
    }

    listarProjetos() {
        this.projetoService.listar().subscribe(
            data => this.projetos = data,
            error => this.error = "Erro ao listar projetos"
        );
    }

    carregaDados() {
        this.selecionaDepartamento();
        this.selecionaEstacionamento();
        this.marcaProjetos();
    }

    selecionaDepartamento() {

        this.departamentos.forEach(departamento => {
            if (this.empregado.departamento.id == departamento.id)
                this.empregado.departamento = departamento;
        });
    }

    selecionaEstacionamento() {

        this.estacionamentos.forEach(estacionamento => {
            if (this.empregado.estacionamento.id == estacionamento.id)
                this.empregado.estacionamento = estacionamento;
        });
    }

    marcaProjetos() {
        this.empregado.projetos.forEach(projetoEmp => {
            this.projetos.forEach(projeto => {
                if (projetoEmp.id == projeto.id)
                    projeto.selected = true;
            });
        });
    }

    checkbox(projeto) {
        projeto.selected = (projeto.selected) ? false : true;
    }
}