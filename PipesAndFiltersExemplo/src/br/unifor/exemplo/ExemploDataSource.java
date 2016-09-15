package br.unifor.exemplo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import br.unifor.datasource.DataSource;
import br.unifor.pipe.Pipe;

public class ExemploDataSource extends DataSource<String> {
    public ExemploDataSource(Pipe<String> output) {
        super(output);
    }

	@Override
	public void gerarDados(Pipe<String> pipe) {
		
		List<String> listaStrings = new ArrayList<String>(Arrays.asList("Single Page Application","Java Persistence API","Enterprise Java Beans"));
		
		for (String string : listaStrings) {
			pipe.insere(string);
			System.out.println("Datasource gerou: "+string);
		}			
				
		pipe.fecha();
		System.out.println("Datasource finalizado");
		
	}  
    
    
}