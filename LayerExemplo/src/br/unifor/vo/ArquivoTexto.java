package br.unifor.vo;

import java.io.File;

public class ArquivoTexto {
	
	private File arquivo;
	private String conteudo;	
	
	public File getArquivo() {
		return arquivo;
	}
	public void setArquivo(File arquivo) {
		this.arquivo = arquivo;
	}
	public String getConteudo() {
		return conteudo;
	}
	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}	

}
