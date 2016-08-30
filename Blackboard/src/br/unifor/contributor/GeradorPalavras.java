package br.unifor.contributor;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import br.unifor.blackboard.Blackboard;
import br.unifor.blackboard.Solucao;


public class GeradorPalavras implements Contributor {
	
	private List<String> dicionario = new ArrayList<String>(Arrays.asList("a", "e", "i", "o", "u", "casa", "cachorro", "correu", "caiu"));
	
	private void updateBlackboard(Solucao novaSolucao) {	
		Blackboard.getInstance().update(novaSolucao);
	}
	
	private Solucao geraPalavra(Solucao solucao) {
		
		String palavra = "";
		int i = 0;
		boolean achouPalavra = false;
		
		while(i < solucao.getSilabas().size() && !achouPalavra) {			
			String silaba = solucao.getSilabas().get(i);		
			if(dicionario.contains(silaba)) {
				palavra = silaba;
				achouPalavra = true;
			} else {
				palavra += silaba;
				if(dicionario.contains(palavra))
					achouPalavra = true;	
			}	
			++i;
		}	
			
		int j = 0;
		while(j < i) {		
			solucao.getSilabas().remove(0);
			++j;
		}	
				
		solucao.getPalavras().add(palavra);	
		
		return solucao;
	}

	@Override
	public Integer execCondition() {				
		
		return Blackboard.getInstance().inspect(this);
	}

	@Override
	public void execAction() {
		Solucao solucaoAtual = Blackboard.getInstance().getSolucao();		
		Solucao novaSolucao = this.geraPalavra(solucaoAtual);		
		
		this.updateBlackboard(novaSolucao);		
	}

}
