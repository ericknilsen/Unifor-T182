package br.unifor.view;
import java.awt.event.ActionEvent;
import java.io.File;

import javax.swing.AbstractAction;
import javax.swing.Action;
import javax.swing.JFileChooser;
import javax.swing.JTextArea;

import br.unifor.business.EditorBS;
import br.unifor.vo.ArquivoTexto;

public class SalvarAction extends AbstractAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JTextArea texto;

	//construtor: recebe o texto inserido pelo usuário no textarea da janela
	public SalvarAction(JTextArea texto) {		
		super("Salvar");	
		this.texto = texto;
		this.putValue(Action.SHORT_DESCRIPTION, "Salva arquivo texto");		
	}
	
	//captura a ação de clique no item de menu
	public void actionPerformed(ActionEvent ev) {
		//cria a tela de diálogo para salvamento do arquivo
		JFileChooser jfc = new JFileChooser();
		int resp = jfc.showSaveDialog(this.texto);
		if (resp != JFileChooser.APPROVE_OPTION)
			return;

		//seleciona o arquivo de salvamento
		File arquivo = jfc.getSelectedFile();
		
		ArquivoTexto arquivoTexto = new ArquivoTexto();
		arquivoTexto.setArquivo(arquivo);
		arquivoTexto.setConteudo(this.texto.getText());
		
		EditorBS editorBS = new EditorBS(arquivoTexto);
		editorBS.salvarArquivo();								
	}

}