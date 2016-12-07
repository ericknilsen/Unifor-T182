package br.unifor.restful.model;

import java.util.Collection;

public class Empregado {

        private Long id;
        private String nome;       
        private String email;
        
        private Departamento departamento;
        
        private Collection<Projeto> projetos;
        
        private Estacionamento estacionamento;
        
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public Collection<Projeto> getProjetos() {
			return projetos;
		}
		public void setProjetos(Collection<Projeto> projetos) {
			this.projetos = projetos;
		}
		public Departamento getDepartamento() {
			return departamento;
		}
		public void setDepartamento(Departamento departamento) {
			this.departamento = departamento;
		}
		public Estacionamento getEstacionamento() {
			return estacionamento;
		}
		public void setEstacionamento(Estacionamento estacionamento) {
			this.estacionamento = estacionamento;
		}
	
    
}