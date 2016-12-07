package br.unifor.restful.model;


public class Projeto {

        private Long id;
        private String nome;       
        private String descricao;
        private Boolean selected;
        
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
		public String getDescricao() {
			return descricao;
		}
		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}
		public Boolean getSelected() {
			return selected;
		}
		public void setSelected(Boolean selected) {
			this.selected = selected;
		}
	
    
}