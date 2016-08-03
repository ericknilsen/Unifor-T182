package br.unifor.blackboard;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Solucao {
	
	List<String> silabas;
	List<String> palavras;
	String frase;
			
	public Solucao() {
		this.silabas = new ArrayList<String>(Arrays.asList("a", "ca", "sa", "ca", "iu"));		
		this.palavras = new ArrayList<String>();
		this.frase = "";		
	}
	
	public List<String> getSilabas() {
		return silabas;
	}
	public void setSilabas(List<String> silabas) {
		this.silabas = silabas;
	}
	public List<String> getPalavras() {
		return palavras;
	}
	public void setPalavras(List<String> palavras) {
		this.palavras = palavras;
	}
	public String getFrase() {
		return frase;
	}
	public void setFrase(String frase) {
		this.frase = frase;
	}	

}
