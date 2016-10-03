package br.unifor.restful.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class EstacionamentoVO {

        private Long id;
        private String codigo;      
       
        
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getCodigo() {
			return codigo;
		}
		public void setCodigo(String codigo) {
			this.codigo = codigo;
		}
		
    
}