package br.unifor.util;

import java.io.IOException;

import javax.swing.JOptionPane;

public class ArquivoException extends IOException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ArquivoException(String message) {
		super(message);
		
		JOptionPane.showMessageDialog(null, message);
	}
	
	
	

}
