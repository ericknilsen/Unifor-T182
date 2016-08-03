package br.unifor.blackboard;
import java.util.Map;
import br.unifor.contributor.Contributor;

public class Blackboard {

	private static Blackboard instancia;
	
	private Solucao solucao;	

	public Blackboard() {
		this.solucao = new Solucao();
	}	

	public Map<Contributor, Double> inspect(Solucao solucao) {
		
		return null;
	}
	
	public Double inspect(Solucao solucao, Contributor contributor) {		

		return null;
	}
	
	private Double calculaProporcao() {
					
		return null;
	}
	
	public Boolean solucaoSatisfatoria() {		
		
		return null;
	}

	public Solucao getSolucao() {
		return solucao;
	}

	public void update(Solucao solucao) {
		
	}
	
	private void mostrarSolucao() {
		
		System.out.print("SILABAS: ");
		for (String silaba : solucao.getSilabas()) {
			System.out.print(silaba+" ");			
		}
		System.out.println();
		System.out.print("PALAVRAS: ");
		for (String palavra : solucao.getPalavras()) {
			System.out.print(palavra+" ");			
		}
		System.out.println();
		System.out.println("FRASE: "+solucao.getFrase());	

	}

}
