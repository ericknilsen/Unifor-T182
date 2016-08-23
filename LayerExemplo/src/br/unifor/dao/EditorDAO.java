package br.unifor.dao;

import java.io.FileWriter;
import java.io.IOException;

import br.unifor.util.ArquivoException;
import br.unifor.vo.ArquivoTexto;

public class EditorDAO {
	
	private ArquivoTexto arquivoTexto;
	
	public EditorDAO(ArquivoTexto arquivoTexto) {
		super();
		this.arquivoTexto = arquivoTexto;
	}

	//salva o arquivo em disco
	public void saveFile() {
		try {
			FileWriter out = new FileWriter(arquivoTexto.getArquivo());
			out.write(this.arquivoTexto.getConteudo());
			out.close();
		} catch (IOException e) {
			new ArquivoException("Erro ao gravar arquivo: "+e.getMessage());
		}
	}

}
