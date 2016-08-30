package br.unifor.control;
import br.unifor.blackboard.Blackboard;
import br.unifor.contributor.Contributor;
import br.unifor.contributor.GeradorFrases;
import br.unifor.contributor.GeradorPalavras;

public class Control {
	
	private Contributor geradorPalavras;
	private Contributor geradorFrases;

	public Control() {
		this.geradorPalavras = new GeradorPalavras();
		this.geradorFrases = new GeradorFrases();
	}

	public void loop() {

		while (!Blackboard.getInstance().solucaoSatisfatoria()) {			
			Contributor contributor = this.nextSource();
			System.out.println();
			System.out.println("CONTRIBUTOR: "+contributor.getClass().getSimpleName());		
						
			contributor.execAction();						
		}

	}

	private Contributor nextSource() {	
		
		Integer fatorContribuicaoGP = this.geradorPalavras.execCondition();		
		Integer fatorContribuicaoGF = this.geradorFrases.execCondition();
				
		if (fatorContribuicaoGP > fatorContribuicaoGF) 
			return this.geradorPalavras;
		else
			return this.geradorFrases;			
	}


}
