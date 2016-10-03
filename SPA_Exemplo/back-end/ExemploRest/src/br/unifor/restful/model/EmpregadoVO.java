package br.unifor.restful.model;

import java.util.Collection;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class EmpregadoVO {

        private Long id;
        private String nome;       
        private String email;
        
        private DepartamentoVO departamento;
        
        private Collection<ProjetoVO> projetos;
        
        private EstacionamentoVO estacionamento;
        
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
		public Collection<ProjetoVO> getProjetos() {
			return projetos;
		}
		public void setProjetos(Collection<ProjetoVO> projetos) {
			this.projetos = projetos;
		}
		public DepartamentoVO getDepartamento() {
			return departamento;
		}
		public void setDepartamento(DepartamentoVO departamento) {
			this.departamento = departamento;
		}
		public EstacionamentoVO getEstacionamento() {
			return estacionamento;
		}
		public void setEstacionamento(EstacionamentoVO estacionamento) {
			this.estacionamento = estacionamento;
		}
	
    
}