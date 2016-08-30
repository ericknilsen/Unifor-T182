package br.unifor.blackboard;

import br.unifor.contributor.Contributor;
import br.unifor.contributor.GeradorFrases;
import br.unifor.contributor.GeradorPalavras;

public class Blackboard {

	private static Blackboard instancia;
	
	private Solucao solucao;	

	private Blackboard() {
		this.solucao = new Solucao();
	}

	public static synchronized Blackboard getInstance() {
		
		if (instancia == null)
			instancia = new Blackboard();
		
		return instancia;
	}
	
	public Integer inspect(Contributor contributor) {
		
		Integer fatorContribuicao = 0;
		if (contributor instanceof GeradorPalavras) {			
			fatorContribuicao = solucao.getSilabas().size() - solucao.getPalavras().size();
		} else if (contributor instanceof GeradorFrases) {
			fatorContribuicao = solucao.getPalavras().size() - solucao.getSilabas().size();
		}
			
		return fatorContribuicao;
	}
		
	
	public Boolean solucaoSatisfatoria() {
		
		return this.solucao.getSilabas().size() == 0 && this.solucao.getPalavras().size() == 0;
		
	}

	public Solucao getSolucao() {
		return solucao;
	}

	public void update(Solucao solucao) {
		this.solucao = solucao;	
		this.mostrarSolucao();
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
