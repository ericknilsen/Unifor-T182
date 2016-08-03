import java.awt.BorderLayout;
import java.awt.Container;

import javax.swing.Action;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class MeuEditor extends JFrame {

	private JMenuBar menubar = new JMenuBar();
	private JMenu menu = new JMenu("Arquivo");
	private JTextArea texto = new JTextArea();

	private Action salvar = new SalvarAction(this.texto);

	public MeuEditor() {
		super("Meu Editor");

		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		Container interno = this.getContentPane();
		this.montaMenu();
	
		this.montaGUI(interno);
	}

	private void montaMenu() {

		JMenuItem itemSalvar = new JMenuItem(this.salvar);

		this.menu.add(itemSalvar);

		this.menubar.add(this.menu);
		this.setJMenuBar(this.menubar);
	}

	private void montaGUI(Container interno) {
		interno.setLayout(new BorderLayout());		
		interno.add(new JScrollPane(this.texto));
	}

	public static void main(String[] args) {
		MeuEditor janela = new MeuEditor();
		janela.setSize(640, 480);
		janela.setVisible(true);
	}
}