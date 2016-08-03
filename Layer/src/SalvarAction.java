import java.awt.event.ActionEvent;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.StringTokenizer;

import javax.swing.AbstractAction;
import javax.swing.Action;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;

public class SalvarAction extends AbstractAction {

	private JTextArea texto;

	public SalvarAction(JTextArea texto) {		
		super("Salvar");	
		this.texto = texto;
		this.putValue(Action.SHORT_DESCRIPTION, "Salva arquivo texto");
	}

	public void actionPerformed(ActionEvent ev) {
		JFileChooser jfc = new JFileChooser();
		int resp = jfc.showSaveDialog(this.texto);
		if (resp != JFileChooser.APPROVE_OPTION)
			return;

		File arquivo = jfc.getSelectedFile();
		
		if(this.verificaChaves(this.texto.getText()))
			this.saveFile(arquivo);
		else 
			JOptionPane.showMessageDialog(null, "Sintaxe incorreta: chaves incompatíveis.");
	}
	
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

	private void saveFile(File f) {
		try {
			FileWriter out = new FileWriter(f);
			out.write(this.texto.getText());
			out.close();
		} catch (IOException e) {
			JOptionPane.showMessageDialog(null, e.getMessage());
		}
	}

}