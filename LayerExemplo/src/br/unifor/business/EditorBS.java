package br.unifor.business;

import java.util.StringTokenizer;

import br.unifor.dao.EditorDAO;
import br.unifor.util.SintaxeInvalidaException;
import br.unifor.vo.ArquivoTexto;

public class EditorBS {
	
	private ArquivoTexto arquivoTexto;
			
	public EditorBS(ArquivoTexto arquivoTexto) {
		super();
		this.arquivoTexto = arquivoTexto;
	}

	public void salvarArquivo() {

		// chama método de negócio p/ verificar se pode salvar o arquivo
		if (this.verificaChaves(this.arquivoTexto.getConteudo())) {
			EditorDAO editorDAO = new EditorDAO(arquivoTexto);
			editorDAO.saveFile();			
		} else
			new SintaxeInvalidaException("Sintaxe incorreta: chaves incompatíveis.");
			
	}
	
	//método de negócio: verifica se número de chaves de abertura é igual a de fechamento
	private boolean verificaChaves(String conteudo) {
		
		StringTokenizer st = new StringTokenizer(conteudo);
		
		int contAbertas = 0;
		int contFechadas = 0;
		while(st.hasMoreTokens()) {
			String palavra = st.nextToken();
			if(palavra.equals("{") || palavra.contains("{"))
				++contAbertas;
			if(palavra.equals("}") || palavra.contains("}"))
				++contFechadas;
		}		
			
		return contAbertas == contFechadas;
	}



}
